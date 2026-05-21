function readPackage(pkg, context) {
  // Allow sharp to run build scripts
  if (pkg.name === 'sharp') {
    pkg.allowBuild = true;
  }
  return pkg;
}

module.exports = {
  hooks: {
    readPackage,
  },
};
