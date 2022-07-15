import express from "express";
import usersRouter from "./routes/users.js";

const app = express();
const Port = 3000;

//midleware for req with body
app.use(express.json())

app.use("/users", usersRouter);

app.listen(Port, () => {
    console.log(`Example app listening on port ${Port}`)
  }); 