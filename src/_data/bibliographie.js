require('dotenv').config();
const EleventyFetch = require("@11ty/eleventy-fetch");

async function getBibliographie() {
  const apiKey = process.env.ZOTERO_API_KEY;
  const userID = '10249404'; // Remplacez par votre ID de groupe Zotero si besoin
  const url = `https://api.zotero.org/users/${userID}/collections/669PL2CW/items?key=${apiKey}`;
  const response = await EleventyFetch(url, {
    duration: "1d", // mettez "1d" pour 1 jour de cache
    type: "json"
  });
  return response;
}

module.exports = getBibliographie;