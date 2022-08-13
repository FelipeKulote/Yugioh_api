const cardsService = require("../services/cards.services");

async function showCards(req, res) {
  try {
    const allCards = await cardsService.findAllCards();
    res.status(200).send(allCards);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
}

async function searchCard(req, res) {
  const id = req.params.id;
  const cardFinded = await cardsService.findCardById(id);
  if (cardFinded) {
    res.status(200).send(cardFinded);
  } else {
    res.status(400).send({ message: "Não há nenhum card com este id" });
  }
}

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
  const id = req.params.id;
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
  const id = req.params.id;
  res.send(deleteCard(id));
};

module.exports = {
  showController,
  searchController,
  createController,
  putController,
  deleteController,
};
