function generateId() {
  const cards = require("../mocks/cards");
  let n = 1;
  loop: while (true) {
    for (let i of cards) {
      if (i.id === n) {
        n++;
        continue loop;
      }
    }
    break;
  }
  return n;
}

class cardEntity {
  constructor(card) {
    this.id = generateId();
    this.name = card.name;
    this.atk = card.atk;
    this.def = card.def;
    this.type = card.type;
  }

  validate() {
    if (!this.name) {
      throw new Error("Insira um nome para o card");
    }
    if (!this.atk) {
      throw new Error("Insira um valor de ataque do card");
    }
    if (!this.def) {
      throw new Error("Insira um valor de defesa do card");
    }
    if (!this.type) {
      throw new Error("Insira o tipo da carta");
    }
  }

  getCard() {
    return {
      id: this.id,
      name: this.name,
      atk: this.atk,
      def: this.def,
      type: this.type,
    };
  }
}

module.exports = cardEntity;

// const test = new cardEntity({
//   name: "testname",
//   atk: "testatk",
//   def: "testdef",
//   type: "testtype",
// });

// console.log(test);
