const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
// const {
//   showCards,
//   deleteCard,
//   createCard,
//   updateCard,
// } = require("../services/cards.services");
const controllerTermos = require("../controllers/cards.controller");

app.use(cors());
app.get("/", controllerTermos.showController);
app.get("/:id", controllerTermos.searchController);
app.post("/post", controllerTermos.createController);
app.put("/put/:id", controllerTermos.putController);
app.delete("/delete/:id", controllerTermos.deleteController);



app.listen(3000, () => {
  console.log("http://localhost:3000");
});
