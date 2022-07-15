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

usersRouter.get('/:id', function (req, res) {
  const searchId = req.params.id;
  let searchedUsers = {};
  for (let i=0; i<users.length; i++){
      if (Number(searchId) === users[i].id){
          searchedUsers = users[i];
          break;
      }   
  }
  const responseObject = {
      success: true,
      payload: searchedUsers
  };
  res.json(responseObject);
});










export default usersRouter;