const cards = require("../mocks/cards");
const Card = require("../database/models/schemas");
const cardEntity = require("../entities/cards.entities");

async function findAllCards() {
  return await Card.find();
}

async function findCardById(id) {
  const cardFinded = await Card.findOne({ id: id });
  if (!cardFinded) {
    throw new Error("Insira um valor válido para o id");
  }
  return cardFinded;
}

async function createCard(card) {
  const newCard = new cardEntity(card);
  newCard.validate();
  const newCardValidated = { ...newCard.getCard() };

  const cardCreated = await Card.create(newCardValidated);
  return cardCreated;
}

async function updateCard(card) {
  const updateCard = new cardEntity(card);
  updateCard.validate();

  const updatedCard = { ...updateCard.getCard() };

  const cardModified = await Card.findOneAndUpdate(
    { id: card.id },
    updatedCard,
    { new: true }
  );

  return cardModified;
}

async function deleteCard(id) {
  const cardDelete = await Card.findOneAndDelete({ id: id })
  if (!id) {
    throw new Error("Insira um id válido para poder deletar um card");
  }
  return cardDelete;
}

module.exports = {
  findAllCards,
  findCardById,
  createCard,
  updateCard,
  deleteCard,  
};
