import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, 'public/img');
const outputDir = path.join(__dirname, 'public/img');

const optimizeImage = async (filename) => {
  const inputPath = path.join(inputDir, filename);
  const outputPath = path.join(outputDir, filename);
  
  try {
    const metadata = await sharp(inputPath).metadata();
    const originalSize = fs.statSync(inputPath).size;
    
    await sharp(inputPath)
      .resize(1920, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ quality: 80 })
      .toFile(outputPath + '.tmp');
    
    fs.renameSync(outputPath + '.tmp', outputPath);
    
    const newSize = fs.statSync(outputPath).size;
    const reduction = ((originalSize - newSize) / originalSize * 100).toFixed(2);
    
    console.log(`✓ ${filename}`);
    console.log(`  ${(originalSize / 1024 / 1024).toFixed(2)} MB → ${(newSize / 1024 / 1024).toFixed(2)} MB (${reduction}% reduction)`);
    
    return { filename, originalSize, newSize, reduction };
  } catch (error) {
    console.error(`✗ Error processing ${filename}:`, error.message);
    return null;
  }
};

const optimizeAllImages = async () => {
  console.log('Starting image optimization...\n');
  
  const files = fs.readdirSync(inputDir).filter(file => file.endsWith('.webp'));
  
  const results = [];
  for (const file of files) {
    const result = await optimizeImage(file);
    if (result) results.push(result);
  }
  
  const totalOriginal = results.reduce((sum, r) => sum + r.originalSize, 0);
  const totalNew = results.reduce((sum, r) => sum + r.newSize, 0);
  const totalReduction = ((totalOriginal - totalNew) / totalOriginal * 100).toFixed(2);
  
  console.log('\nSummary:');
  console.log(`Total: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB → ${(totalNew / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Overall reduction: ${totalReduction}%`);
  console.log(`\nOptimization complete!`);
};

optimizeAllImages();
