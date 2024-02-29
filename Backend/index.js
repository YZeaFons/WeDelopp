const { default: mongoose } = require("mongoose");
const server = require("./src/server");
require("dotenv").config();
const { URLMONGODB } = process.env;

const PORT = 3001
server.listen(PORT, () => {
  console.log(`Server on port 3001`);
})

//Mongo DB
const connectionMongoose = async () => {
  await mongoose.connect(URLMONGODB)
    .catch((err) => console.log(err));
  console.log(`Database connected to MongoDB`)
}

connectionMongoose()