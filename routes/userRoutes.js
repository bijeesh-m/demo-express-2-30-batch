const { getUsers, createUser } = require("../controllers/userControllers");
let users = require("../users.json")
const express = require("express");
const router = express.Router()

router.get("/users", getUsers)

router.post("/users", createUser)


router.delete("/users/:id", (req, res) => {

    const updatedUsers = users.filter((user) => user.id !== Number(req.params.id))
    users = updatedUsers;
    res.send(users)
})

router.put("/users/:id", (req, res) => {

    const { username, email, password, age } = req.body
    const userId = req.params.id

    const updatedUsers = users.map((user) => {
        if (user.id === Number(userId)) {
            user.username = username ? username : user.username
            user.email = email ? email : user.email
            user.password = password ? password : user.password
            user.age = age ? age : user.age
        }
        return user
    })

    users = updatedUsers
    res.send(users)

})


module.exports = router