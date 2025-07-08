const express = require('express');
const app = express();
const stringReplace = require('string-replace-middleware');
const path = require('path');

const KC_URL = process.env.KC_URL || "http://localhost:8080";
const SERVICE_URL = process.env.SERVICE_URL || "http://localhost:3000/secured";

app.use(stringReplace({
   'SERVICE_URL': SERVICE_URL,
   'KC_URL': KC_URL
}));

app.use(express.static('.'));

app.listen(8000, () => {
    console.log('App is listening on http://localhost:8000');
});
