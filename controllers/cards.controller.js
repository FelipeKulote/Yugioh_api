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

async function createCard(req, res) {
  try {
    const card = req.body;
    const cardCreated = await cardsService.createCard(card);
    res.status(201).send(cardCreated);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
}

async function putCard(req, res) {
  try {
    const card = req.body;
    const cardUpdated = await cardsService.putCard(card);
    res.status(200).send(cardUpdated);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
}

async function deleteCard (req, res) {
  const id = req.params.id;
  const cardDeleted = await cardsService.deleteCard
  if (cardDeleted) {
    res.status(200).send(cardDeleted);
  } else {
    res.status(400).send({ message: "Não há nenhum card com este id" })
  }
};

module.exports = {
  showCards,
  searchCard,
  createCard,
  putCard,
  deleteCard,
};
