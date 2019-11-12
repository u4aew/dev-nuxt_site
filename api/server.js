const express = require('express');
const fs = require("fs");
const axios = require("axios");
const app = express();
const cities = ['barnaul', 'moscow'];
const basicAuth = require('express-basic-auth');
const cors = require('cors');
// app.use(basicAuth({
//     users: {'admin': 'supersecret'}
// }))

app.use(cors());

app.get('/api/articles/', (req, res) => {
    const fileContent = fs.readFileSync(`${__dirname}/mappings/common/articles/total.json`, "utf8");
    return res.json(fileContent);
});

app.get('/api/article/', (req, res) => {
    const slug = req.query.slug;
    const fileContent = fs.readFileSync(`${__dirname}/mappings/articles/${slug}.json`, "utf8");
    return res.json(fileContent);
});

app.get('/api/info-ip/', async (req, res) => {
    const ip = req.query.ip;
    let params;
    try {
        params = await axios.get(`http://free.ipwhois.io/json/${ip}`);
        res.json(params.data)
    } catch (e) {
        // do noting
    }
});

app.listen(4000, () =>
    console.log(`Example app listening on port 4000!`),
);