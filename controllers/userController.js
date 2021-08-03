const Sequelize = require("sequelize");
// const sequelize = require('./config/connection');
const Users = require('../models').user;
const response = require('../helpers/response'); 

exports.signUp = async(req, res) => {
    const { email, password, username } = req.body;

    try {
        if(!email || !password || !username) {
            return response(res, 400, null, 'Please supply missing input(s)');
        }
        const userExist = await Users.findOne({where: {email}, raw: true});
        if(userExist) {
            return response(res, 400, null, 'Account already exists');
        }
        const user = await Users.create({email, password, username});
        const returnedUser = {
            id: user.id,
            email: user.email,
            username: user.username
        }
        response(res, 201, {user: returnedUser}, null, 'User account created');
    }catch(error) {
        if(error.message.search('Validation') >= 0) { 
            return response(res, 400, null, 'Email not valid'); 
        }
        response(res, 500, null, error.message, 'Error in creating user');
    }
};

exports.login = async(req, res) => {
    const { email, password } = req.body; 

    try {
        if(!email || !password ) {
            return response(res, 400, null, 'Please supply missing input(s)');
        }
        const userExist = await Users.findOne({where: {email}, raw: true});
        if(!userExist) {
            return response(res, 400, null, 'Account does not exist');
        }
        delete userExist.password;
        response(res, 200, { user: userExist }, null, 'User logged in');
    }catch(error) {
        if(error.message.search('Validation') >= 0) {
            return response(res, 400, null, 'Email not valid');
        }
        response(res, 500, null, error.message, 'Loin error');
    }
};

exports.getUsers = async(req, res) => {
    try {
        const users = await Users.findAll();
    
        response(res, 200, { users }, null, 'List of users');
    }catch(error) {
        if(error.message.search('Validation') >= 0) {
            return response(res, 400, null, 'Email not valid');
        }
        response(res, 500, null, error.message, 'Error in getting users');
    }
}; 

exports.getUsername = async(req, res) => {
    const { username } = req.params;
    try {
        const usernameExist = await Users.findOne({where: {username}, raw: true});
        if(usernameExist) {
            return response(res, 400, null, 'Username is taken');
        }
        response(res, 200, null, null, 'Username is available');
    }catch(error) {
        if(error.message.search('Validation') >= 0) {
            return response(res, 400, null, 'Username not valid');
        }
        response(res, 500, null, error.message, 'Error in getting username');
    }
}; 