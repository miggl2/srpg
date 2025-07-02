const fs = require("fs");
const path = require("path");

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();

  if (isDirectory) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest);
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(path.join(src, childItemName),
                        path.join(dest, childItemName));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

const distPath = path.resolve(__dirname, "../dist");
const docsPath = path.resolve(__dirname, "../docs");

if (fs.existsSync(docsPath)) {
  fs.rmSync(docsPath, { recursive: true });
}
copyRecursiveSync(distPath, docsPath);
