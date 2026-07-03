"use client"

import { useEffect, useState, useMemo } from "react"

const EMOJIS = ["🏆", "⚽", "🇦🇷", "🥇", "🎉", "⭐", "🎊", "🙌"]
const RAIN_DURATION = 6000 // ms visible on screen
const DROP_COUNT = 40

type Drop = {
  id: number
  emoji: string
  left: number
  delay: number
  duration: number
  size: number
  drift: number
}

export function EmojiRain() {
  const [visible, setVisible] = useState(true)

  const drops = useMemo<Drop[]>(() => {
    return Array.from({ length: DROP_COUNT }).map((_, i) => ({
      id: i,
      emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
      left: Math.random() * 100,
      delay: Math.random() * 1.5,
      duration: 3 + Math.random() * 3,
      size: 20 + Math.random() * 28,
      drift: (Math.random() - 0.5) * 120,
    }))
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), RAIN_DURATION)
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[100] overflow-hidden"
    >
      {drops.map((drop) => (
        <span
          key={drop.id}
          className="absolute top-0 animate-emoji-fall select-none"
          style={{
            left: `${drop.left}%`,
            fontSize: `${drop.size}px`,
            animationDelay: `${drop.delay}s`,
            animationDuration: `${drop.duration}s`,
            ["--emoji-drift" as string]: `${drop.drift}px`,
          }}
        >
          {drop.emoji}
        </span>
      ))}
      <style jsx>{`
        @keyframes emoji-fall {
          0% {
            transform: translate3d(0, -10vh, 0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translate3d(var(--emoji-drift), 110vh, 0) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-emoji-fall {
          animation-name: emoji-fall;
          animation-timing-function: ease-in;
          animation-iteration-count: 1;
          animation-fill-mode: forwards;
          will-change: transform, opacity;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-emoji-fall {
            animation: none;
            display: none;
          }
        }
      `}</style>
    </div>
  )
}
