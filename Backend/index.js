const express = require("express");
const dbConnection = require("./db");

dbConnection();
const app = express();

app.use(express.json());

const employeeRouter = require("./routes/Employees");
app.use("/employees", employeeRouter);

app.listen(3000, () => {
  console.log("Server Connected");
});
