const cards = require("../mocks/cards");
const cardEntity = require("../entities/cards.entities");

function showCards() {
  return cards;
}

function searchCards(id) {
  let cardId;
  cards.map((card) => {
    if (card.id === id) {
      cardId = card;
    }
  });
  if (!cardId) {
    throw new Error("Insira um valor válido para o id");
  }
  return cardId;
}

function deleteCard(id) {
  let cardId;
  cards.map((card) => {
    if (card.id === id) {
      cardId = card;
    }
  });
  if (!cardId) {
    throw new Error("Insira um valor válido para o id");
  }
  cards.splice(cards.indexOf(cardId), 1);
  return cards;
}

function createCard(card) {
  const newCard = new cardEntity(card);
  newCard.validate();
  const cardCreated = { ...newCard };
  cards.push(cardCreated);
  return cards;
}

function updateCard(id, object) {
  let update;
  let location;
  cards.map((card) => {
    if (card.id === id) {
      update = card;
      location = cards.indexOf(card);
    }
  });
  if (!update) {
    throw new Error("Não há nenhum card com este id");
  }

  update.name = object.name === undefined ? update.name : object.name;
  update.atk = object.atk === undefined ? update.atk : object.atk;
  update.def = object.def === undefined ? update.def : object.def;
  update.type = object.type === undefined ? update.type : object.type;

  cards.splice(location, 1, update);
  console.log("A lista de cards foi atualizada");
  return cards;
}

module.exports = {
  showCards,
  searchCards,
  deleteCard,
  createCard,
  updateCard,
};


// createCard({
//       name: "testname",
//       atk: "testatk",
//       def: "testdef",
//       type: "testtype",
//     });
// console.log(cards);
