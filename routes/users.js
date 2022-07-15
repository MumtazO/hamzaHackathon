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

usersRouter.post("/", function (req, res) {
  const body = req.body;
  users.push(body);
  const updatedUsers = users;
  console.log(body);
  const responseObject = {
    success: true,
    payload: updatedUsers,
  };
  res.json(responseObject);
  console.log(users);
});

// UPDATE USER BY ID

usersRouter.put("/change/:id", function (req, res) {
  const body = req.body;

  let id = req.params.id;
  console.log(id);
// Loop through array and assign id to id from array
// update body
  for (let i = 0; i < users.length; i++) {
    if (Number(id) === users[i].id) {
      users[i].first_name = body.first_name;
      users[i].last_name = body.last_name;
      users[i].email = body.email;
      users[i].catchphrase = body.catchphrase;
      const responseObject = {
        success: true,
        payload: users[i],
      };
      res.json(responseObject);

      return;
    }
  }
});

// DELETE USER BY ID

usersRouter.delete("/delete/:id", function (req, res) {
  const body = req.body;

  let id = req.params.id;
  console.log(id);
//Loop throug array and assign id to id from array
  for (let i = 0; i < users.length; i++) {
    if (Number(id) === users[i].id) {
      let deletedUser = users[i];
      //delete  selected id
      users.splice(i, 1);
      const responseObject = {
        success: true,
        payload: deletedUser,
      };
      res.json(responseObject);
      console.log(users);
    }
  }
});

export default usersRouter;
