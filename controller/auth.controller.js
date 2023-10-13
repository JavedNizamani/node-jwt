const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
var db = require('../config/db.tables');
const dotenv = require('dotenv');
dotenv.config();


var userDb = db.User;

const registerUser = async (req, res)=>{

    try{
        const {name, email, password} = req.body;
        // check if email exists

        const userExists = await userDb.findOne({
            where:{email}
        });

        if(userExists){
            return res.status(400).send('Email is already associated with an account');
        }

        await userDb.create({
            name: name,
            email: email,
            password: await bcrypt.hash(password, 5),
        });
            return res.status(200).send('Registration Succesful');
        
    }catch(err){
        return res.status(500).send('Error in Registering User', err);
    }
}

const signInUser = async(req, res)=>{
    try{
        const {email, password} = req.body;

        const user = await userDb.findOne({
            where:{email}
        });
        if(!user){
            return res.status(404).send('Email not found');
        }
            // Verify Password
        
            const passwordValid = await bcrypt.compare(password, user.password);
        if(!passwordValid){
            return  res.status(404).json('Incorrect email and password combination')
        }

            // Authenticate User with jwt

        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_REFRESH_EXPIRATION});

        res.status(200).send({
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
            accessToken: token
        });

    }catch(err){
        return res.status(500).send('Sign in error');
    }
}

module.exports = {
    registerUser,
    signInUser
}