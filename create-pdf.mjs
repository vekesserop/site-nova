import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  // Запускаем браузер
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Устанавливаем размер страницы для A4
  await page.setViewport({
    width: 1240,
    height: 1754,
    deviceScaleFactor: 1,
  });
  
  // Загружаем локальный HTML-файл
  const filePath = path.join(__dirname, 'dist', 'index.html');
  await page.goto(`file://${filePath}`, {
    waitUntil: 'networkidle0',
  });
  
  // Ждем, чтобы все анимации и скрипты загрузились
  await page.waitForTimeout(2000);
  
  // Создаем PDF
  await page.pdf({
    path: 'nova-ai-site.pdf',
    format: 'A4',
    printBackground: true,
    margin: {
      top: '20px',
      right: '20px',
      bottom: '20px',
      left: '20px'
    }
  });
  
  // Закрываем браузер
  await browser.close();
  
  console.log('PDF создан успешно: nova-ai-site.pdf');
})();
