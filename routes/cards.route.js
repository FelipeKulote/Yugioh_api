const router = require("express").Router();
const controllerTermos = require("../controllers/cards.controller");

app.use(cors());
router.get("/", controllerTermos.showController);
router.get("/:id", controllerTermos.searchController);
router.post("/post", controllerTermos.createController);
router.put("/put/:id", controllerTermos.putController);
router.delete("/delete/:id", controllerTermos.deleteController);


module.exports = router;