const {
  showCards,
  searchCards,
  deleteCard,
  createCard,
  updateCard,
} = require("../services/cards.services");

const showController = (req, res) => {
  res.send(showCards());
};
const searchController = (req, res) => {
  const id = Number(req.params.id);
  res.send(searchCards(id));
};
const createController = (req, res) => {
  res.send(
    createCard({
      name: req.body.name,
      atk: req.body.atk,
      def: req.body.def,
      type: req.body.type,
    })
  );
};
const putController = (req, res) => {
  const id = Number(req.params.id);
  res.send(
    updateCard(id, {
      name: req.body.name,
      atk: req.body.atk,
      def: req.body.def,
      type: req.body.type,
    })
  );
};
const deleteController = (req, res) => {
  const id = Number(req.params.id);
  res.send(deleteCard(id));
};

module.exports = {
  showController,
  searchController,
  createController,
  putController,
  deleteController,
};
