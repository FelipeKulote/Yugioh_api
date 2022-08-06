const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
const {
  showCards,
  deleteCard,
  createCard,
  updateCard,
} = require("../services/cards.services");
const {
  showController,
  createController,
  putController,
  deleteController,
  searchController,
} = require("../controllers/cards.controller");

app.use(cors());
app.get("/", showController);
app.get("/:id", searchController);
app.post("/post", createController);
app.put("/put/:id", putController);
app.delete("/delete/:id", deleteController);

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
