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

// UPDATE USER BY ID

usersRouter.put('/change/:id', function (req, res){
  
  const body = req.body;
  
    let id = req.params.id-1; //-1change URL parameters into array index (index starts at 0 not 1)
    console.log(id);
    users[id].first_name = body.first_name;
    users[id].last_name= body.last_name;
    users[id].email = body.email;
    users[id].catchphrase = body.catchphrase;
    console.log(body)
    const responseObject = {
      success: true,
      payload: users[id],
    };
  res.json(responseObject);
  console.log(users);
  });

  // DELETE USER BY ID 


  usersRouter.delete('/delete/:id', function (req, res){
  
    const body = req.body;
    
      let id = req.params.id-1; //-1change URL parameters into array index (index starts at 0 not 1)
      console.log(id);
      let deletedUser = users[id];
      users.splice(id, 1);
      console.log(body);
      const responseObject = {
        success: true,
        payload: deletedUser,
      };
    res.json(responseObject);
    console.log(users);
    });
