import express from "express";
import users from "../db/users.js";

const usersRouter = express.Router();

// GET ALL USERS

usersRouter.get("/", function (req, res) {
  const usersData = {
    success: true,
    payload: users,
  };
  res.json(usersData);
});

// GET A USER BY ID

usersRouter.get("/:id", function (req, res) {
  const searchId = req.params.id;
  let searchedUsers = {};
  for (let i = 0; i < users.length; i++) {
    if (Number(searchId) === users[i].id) {
      searchedUsers = users[i];
      break;
    }
  }
  const responseObject = {
    success: true,
    payload: searchedUsers,
  };
  res.json(responseObject);
});

//CREATE USER
// assigning the variable body to request the body of our new user(body meaning the data)
// user.push(body) = this adds the data to our users array

// usersRouter.post("/", function (req, res) {
//   const body = req.body;
//   users.push(body);
//   res.json({ success: true, payload: users });
// });

usersRouter.post('/', function (req, res){
  const body = req.body;
  users.push(body);
  // const updatedUsers = users;
console.log(body);
  const responseObject = {
    success: true,
    payload: users
};
res.json(responseObject);
// console.log(users);
});

export default usersRouter;