import express from "express";
import users from "../db/users.js";

const usersRouter = express.Router();

// get all users
usersRouter.get("/", function (req, res) {
  const usersData = {
    success: true,
    payload: users,
  };
  res.json(usersData);
});

export default usersRouter;