import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Function to update imports in a file
function updateImportsInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const originalContent = content;

  // Replace import statements for png, jpg, jpeg files
  content = content.replace(/from ["'](.+?)\.(png|jpg|jpeg)["']/g, (match, path, ext) => {
    return `from "${path}.webp"`;
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`✅ Updated: ${filePath}`);
    return true;
  }
  return false;
}

// Recursively find and update all TypeScript/JavaScript files
function updateAllImports(dir) {
  const files = fs.readdirSync(dir, { recursive: true });
  let updated = 0;
  let checked = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() || filePath.includes('node_modules')) {
      continue;
    }

    const ext = path.extname(filePath).toLowerCase();
    if (['.ts', '.tsx', '.js', '.jsx'].includes(ext)) {
      checked++;
      if (updateImportsInFile(filePath)) {
        updated++;
      }
    }
  }

  console.log(`\n📊 Summary: ${updated} files updated, ${checked} files checked`);
}

const srcDir = path.join(__dirname, 'src');
updateAllImports(srcDir);
