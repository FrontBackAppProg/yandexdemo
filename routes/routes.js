const express = require('express');
const router = express.Router();

// Прокси для загрузки карт с ключом
const yandexMapLoad = require('../controllers/yandexMapLoad')
router.get('/ymaps-loader.js', yandexMapLoad)  


const suggestYandexMap = require('../controllers/suggestYandexMap')
router.get('/suggest', suggestYandexMap)

module.exports = router;