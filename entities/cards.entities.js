const crypto = require("node:crypto");

class cardEntity {
  constructor(cardYugi) {
    this.id = cardYugi.id ?? crypto.randomUUID();
    this.name = cardYugi.name;
    this.atk = cardYugi.atk;
    this.def = cardYugi.def;
    this.type = cardYugi.type;
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
