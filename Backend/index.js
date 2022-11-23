const express = require("express");
const dbConnection = require("./db");
const cors = require("cors");

dbConnection();
const app = express();

app.use(express.json());

const employeeRouter = require("./routes/Employees");
app.use("/employees", employeeRouter);

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.listen(5000, () => {
  console.log("Server Connected");
});
