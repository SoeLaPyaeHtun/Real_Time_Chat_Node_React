//model service
const userService = require('../services/UserService')

//third-party module
const validator = require('validator')



async function userRegister(req, res, next) {
    const {
        name,
        email,
        password
    } = req.body;
    if (!name || !email || !password) return res.status(400).json("All fields are required");

    if (!validator.isEmail(email)) return res.status(400).json("Email must be validate");
    if (!validator.isStrongPassword(password)) return res.status(400).json("Password Must be strong");
    try {
        let result = await userService.userRegister(name, email, password)

        if (!result) return res.status(404).json("User with given email is already exists");


        res.status(201).json(result)
    } catch (e) {
        await res.status(400).json({
            error: e.message
        })
    }
}

async function userLogin(req, res, next) {
    const { email, password } = req.body;
    try{

        let result = await userService.userLogin(email, password);
        if(!result) return res.status(400).json("Invalid user or password")

        res.status(200).json(result)

    }catch (e) {
        await res.status(400).json({
            error: e.message
        })
    }

}

async function userById(req, res, next){
    const userId = req.params.userId;
    try{
        let result = await userService.userById(userId);
        if(!result) return res.status(400).json("User not found");

        res.status(200).json(result)

    }catch (e) {
        await res.status(400).json({
            error: e.message
        })
    }
}

async function getUsers(req, res, next){
    try{
        let result = await userService.getUsers();
        res.status(200).json(result)
    }catch (e) {
        await res.status(400).json({
            error: e.message
        })
    }
}


module.exports = {
    userRegister,
    userLogin,
    userById,
    getUsers
}