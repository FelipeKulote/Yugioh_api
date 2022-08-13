const { connect } = require("mongoose");

function mongoConnect() {
  connect("mongodb://localhost:27017/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log("MongoDb Connected");
    })
    .catch((err) => {
      console.log("Error in database: ", err);
    });
}

module.exports = { mongoConnect };
