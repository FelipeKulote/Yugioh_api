const express = require("express");
const cors = require("cors");
const cardsRoutes = require("../routes/cards.route");
const { mongoConnect } = require("./database/mongoDb/mongo")

const app = express();

app.use(cors());
app.use(express.json());

mongoConnect();

app.use("/cards", cardsRoutes);

app.listen(3000, () => {
    console.log("http://localhost:3000");
  });