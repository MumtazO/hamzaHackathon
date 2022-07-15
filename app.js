import express from "express";
import usersRouter from "./routes/users.js";

const app = express();
const Port = 3000;

// app.use(express.json())

app.use("/users", usersRouter);

app.use("/change/:id", usersRouter);


app.listen(Port, () => {
    console.log(`Example app listening on port ${Port}`)
  });