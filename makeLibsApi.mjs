import { join } from 'node:path';
import { existsSync, mkdirSync, readdirSync, statSync, copyFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, '..');

// Define the source and destination paths
const libraries = [
  'env',
  'core',
  'router',
  'config',
  'pipeline',
  'http-core',
  'node-adapter',
  'service-container',
  'aws-lambda-adapter',
];

const docsSrcPath = join(__dirname, 'src', 'api');

// Function to copy files recursively
const copyFilesRecursively = (src, dest) => {
  if (!existsSync(src)) {
    console.error(`Source path does not exist: ${src}`);
    return;
  }

  // Ensure the destination directory exists
  mkdirSync(dest, { recursive: true });

  // Read all items from the source directory
  const items = readdirSync(src);

  items.forEach((item) => {
    const srcPath = join(src, item);
    const destPath = join(dest, item);
    const stats = statSync(srcPath);

    if (stats.isDirectory()) {
      // If item is a directory, copy recursively
      copyFilesRecursively(srcPath, destPath);
    } else {
      // If item is a file, copy it to the destination
      copyFileSync(srcPath, destPath);
    }
  });
};

// Main function to copy documentation
const copyLibraryDocs = () => {
  libraries.forEach((library) => {
    const libraryDestPath = join(docsSrcPath, library);
    const libraryDocsPath = join(__dirname, '../', library, 'docs');

    console.log(`Copying documentation for ${library}...`);
    copyFilesRecursively(libraryDocsPath, libraryDestPath);
    console.log(`Documentation for ${library} copied successfully.`);
  });
};

// Run the script
copyLibraryDocs();
