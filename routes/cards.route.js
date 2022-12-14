const router = require("express").Router();
const controllerTermos = require("../controllers/cards.controller");

router.get("/", controllerTermos.showCards);
router.get("/:id", controllerTermos.searchCard);
router.post("/create", controllerTermos.createCard);
router.put("/update/:id", controllerTermos.putCard);
router.delete("/delete/:id", controllerTermos.deleteCard);

module.exports = router;
