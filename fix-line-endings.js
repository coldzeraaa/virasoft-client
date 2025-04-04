// fix-line-endings.js
import * as fs from 'fs';
const path = require('path');

const exts = ['.js', '.ts', '.jsx', '.tsx', '.html', '.css', '.json', '.md'];

function convertToLF(filePath) {
  const data = fs.readFileSync(filePath, 'utf8');
  const fixed = data.replace(/\r\n/g, '\n');
  fs.writeFileSync(filePath, fixed, 'utf8');
  console.log(`✅ LF: ${filePath}`);
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      if (file === 'node_modules' || file.startsWith('.')) continue;
      walkDir(fullPath);
    } else {
      if (exts.includes(path.extname(fullPath))) {
        convertToLF(fullPath);
      }
    }
  }
}

walkDir('.');
