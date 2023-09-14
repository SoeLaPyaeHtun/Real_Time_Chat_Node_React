const User = require('../models/userSchema')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


const createToken = (_id) => {
    return jwt.sign({_id}, "asdfpaoelcaois438479", {expiresIn : "3d"})
}


async function userRegister(name, email, password){
    let user = await User.findOne({ email });
    if(user) return false;

    user = new User({name , email, password})

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password,salt)
    await user.save()
    const _token = createToken(user._id);
    console.log(user._id)
    user._doc.token = _token

    return user;
}

async function userLogin(email , password){
    let user = await User.findOne({ email })
    console.log(user);
    if(!user) return false;

    const isValidPassword = await bcrypt.compare(password, user.password)

    if(!isValidPassword) return false;

    return user;
}

async function userById(userId){
    let user = await User.findById(userId)

    if(!user) return false;
    return user;
}

async function getUsers(){
    let users = await User.find();
    console.log(users)
    return users;
}

module.exports = {
    userRegister,
    userLogin,
    userById,
    getUsers
}