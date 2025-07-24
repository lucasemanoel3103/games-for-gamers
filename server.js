const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


let db = [
    {
    id: 1,
    title: "The Legend of Zelda: Breath of the Wild",
    year: 2017,
    price: 199.90
  },
  {
    id: 2,
    title: "God of War: Ragnarok",
    year: 2022,
    price: 249.90
  },
  {
    id: 3,
    title: "Red Dead Redemption 2",
    year: 2018,
    price: 149.90
  },
  {
    id: 4,
    title: "Elden Ring",
    year: 2022,
    price: 199.90
  }
]


app.listen(3000,() => {
    console.log("API rodando!");
})