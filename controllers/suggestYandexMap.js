const dotenv = require('dotenv');
dotenv.config();


module.exports = suggestYandexMap = async (req, res) => {
  const { text, sessiontoken, lang = 'ru_RU', results = '10' } = req.query;
  const key = process.env.YANDEX_SUGGEST_API_KEY;

  if (!text) return res.status(400).json({ error: 'No text' });

  try {
    const fetch = (await import('node-fetch')).default;

    const url = `https://suggest-maps.yandex.ru/v1/suggest?apikey=${key}&text=${encodeURIComponent(text)}&lang=${lang}&results=${results}` +
                (sessiontoken ? `&sessiontoken=${sessiontoken}` : '');

    const response = await fetch(url, {
      headers: { 'User-Agent': 'Node.js' }
    });

    if (!response.ok) throw new Error(`status ${response.status}`);

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error('Suggest API error:', err); // важный лог
    res.status(500).json({ error: 'Suggest fetch failed' });
  }
};