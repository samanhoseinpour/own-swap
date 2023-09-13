const express = require('express');
const Moralis = require('moralis').default;
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get('/tokenPrice', async (req, res) => {
  const { query } = req;

  console.log(query);

  const reponseOne = await Moralis.EvmApi.token.getTokenPrice({
    address: query.addressOne,
  });

  const reponseTwo = await Moralis.EvmApi.token.getTokenPrice({
    address: query.addressTwo,
  });

  const usdPrice = {
    tokenOne: reponseOne.raw.usdPrice,
    tokenTwo: reponseTwo.raw.usdPrice,

    ratio: reponseOne.raw.usdPrice / reponseTwo.raw.usdPrice,
  };

  return res.status(200).json(usdPrice);
});

Moralis.start({
  apiKey: process.env.MORALIS_KEY,
}).then(() => {
  app.listen(port, () => {
    console.log(`Listening for API Calls`);
  });
});
