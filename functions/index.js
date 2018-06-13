const functions = require('firebase-functions');
const express = require('express');

const app = express();

app.get('/timestamp', (request, response) => {
    response.send(`Timestamp: ${Date.now()}`);
});

app.get('/timestamp-cached', (request, response) => {
    response.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    response.send(`Timestamp: ${Date.now()}`);
});

exports.test1 = functions.https.onRequest(app);
