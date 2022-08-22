require("dotenv").config();
const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");

const PORT = process.env.PORT || 8001;

const app = express();

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));
