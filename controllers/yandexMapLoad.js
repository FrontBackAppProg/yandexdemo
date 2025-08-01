const dotenv = require('dotenv');
dotenv.config();

module.exports = yandexMapLoad = (req, res) => {
  const apiKey = process.env.YANDEX_MAPS_API_KEY;
  res.type('application/javascript').send(`
    export async function load() {
      return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = "https://api-maps.yandex.ru/2.1/?apikey=${apiKey}&lang=ru_RU";
        script.onload = () => resolve(window.ymaps);
        document.head.appendChild(script);
      });
    }
  `);
};
