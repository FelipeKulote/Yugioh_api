const express = require("express");
const cors = require("cors");
const cardsRoutes = require("./routes/cards.route");
const { mongoConnect } = require("./database/mongoDb/mongo");
const swaggerUi = require("swagger-ui-express");
const swaggerDoc = require("./docs/swagger.json");

const app = express();

app.use(cors());
app.use(express.json());

mongoConnect();

app.use("/api/docs", swaggerUi.serve);
app.get("/api/docs", swaggerUi.setup(swaggerDoc));
app.use("/cards", cardsRoutes);

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
