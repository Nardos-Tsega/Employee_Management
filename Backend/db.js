const mongoose = require("mongoose");
// const url = process.env.MONGO_URI;
const url =
  "mongodb+srv://nardosT:thisisyourpasswordformongodbatlas@testprojectcluster.wjnsfd7.mongodb.net/test_project_db";

const dbConnection = async () => {
  try {
    const connect = await mongoose.connect(url);
    console.log(connect.connection.host);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

module.exports = dbConnection;
