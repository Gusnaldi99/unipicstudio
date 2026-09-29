import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const clientsDir = path.resolve('public/assets/images/clients');
const backupDir = path.join(clientsDir, '_originals');

if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
}

async function convertLogos() {
  console.log('=== MEMULAI KONVERSI LOGO KLIEN KE WEBP ===\n');

  const files = fs.readdirSync(clientsDir).filter(file => {
    const filePath = path.join(clientsDir, file);
    return fs.statSync(filePath).isFile();
  });

  let totalBefore = 0;
  let totalAfter = 0;
  let convertedCount = 0;

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    const baseName = path.basename(file, ext);
    const srcPath = path.join(clientsDir, file);
    const destName = `${baseName}.webp`;
    const destPath = path.join(clientsDir, destName);
    const backupPath = path.join(backupDir, file);

    const initialStat = fs.statSync(srcPath);
    totalBefore += initialStat.size;

    if (ext === '.webp') {
      console.log(`[SUDAH WEBP] ${file} (${(initialStat.size / 1024).toFixed(1)} KB) - Tetap disimpan.`);
      totalAfter += initialStat.size;
      continue;
    }

    try {
      // 1. Baca metadata & tentukan konfigurasi
      const isSvg = ext === '.svg';
      let pipeline = sharp(srcPath, isSvg ? { density: 300 } : {});

      // 2. Resize proporsional: max 600px width / 240px height (retina 2x/3x ready)
      pipeline = pipeline.resize({
        width: 600,
        height: 240,
        fit: 'inside',
        withoutEnlargement: true,
      });

      // 3. Konversi ke WebP dengan mempertahankan alpha channel transparansi
      const webpBuffer = await pipeline
        .webp({
          quality: 85,
          effort: 6,
        })
        .toBuffer();

      // 4. Simpan file webp baru
      fs.writeFileSync(destPath, webpBuffer);
      totalAfter += webpBuffer.length;

      // 5. Pindahkan file original ke _originals/ sebagai backup aman
      fs.copyFileSync(srcPath, backupPath);
      fs.unlinkSync(srcPath);

      convertedCount++;
      const savedPercent = (((initialStat.size - webpBuffer.length) / initialStat.size) * 100).toFixed(1);
      console.log(
        `[BERHASIL] ${file.padEnd(35)} -> ${destName.padEnd(30)} ` +
        `(${(initialStat.size / 1024).toFixed(1)} KB -> ${(webpBuffer.length / 1024).toFixed(1)} KB, hemat ${savedPercent}%)`
      );
    } catch (err) {
      console.error(`[ERROR] Gagal konversi ${file}:`, err.message);
      totalAfter += initialStat.size;
    }
  }

  console.log('\n================ RINGKASAN ================');
  console.log(`Total file dikonversi : ${convertedCount} file`);
  console.log(`Total ukuran awal     : ${(totalBefore / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total ukuran baru     : ${(totalAfter / 1024).toFixed(1)} KB`);
  console.log(`Penghematan bandwith  : ${(((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1)}%`);
  console.log(`Backup file original  : public/assets/images/clients/_originals/`);
  console.log('===========================================\n');
}

convertLogos();
