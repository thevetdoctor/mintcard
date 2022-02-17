const Sequelize = require("sequelize");
const Users = require('../models').user;
const Games = require('../models').game;
const { response } = require('oba-http-response');

exports.saveGames = async(req, res) => {
    const { uniqueid, type, winner, player, opponent, duration, state, completed, update, userId } = req.body;

    try {
        if(!uniqueid || !type || !winner || !player || !opponent || !duration || !state || !update || !userId) {
            return response(res, 400, null, 'Please supply missing input(s)');
        }
        const gameExist = await Games.findOne({where: {uniqueid}, raw: true});
        if(gameExist) {
            if(!update) {
                return response(res, 400, null, 'Game already saved in record');
            } else {
                await Games.update(req.body, {where: { id: gameExist.id} });
                return response(res, 200, {game: gameExist}, null, 'Game has been updated');
            }
        }
        const game = await Games.create(req.body);
     
        response(res, 201, {game}, null, 'Game has been saved');
    }catch(error) {
        if(error.message.search('Validation') >= 0) { 
            return response(res, 400, null, 'Supplied value is invalid'); 
        }
        response(res, 500, null, error.message, 'Error in saving the game');
    }
};

exports.getGames = async(req, res) => {
    const {email} = req.params;
    try {
        const gameUser = await Users.findOne({where: {email}, raw: true});
        if(!gameUser) {
            return response(res, 400, null, 'user with email does not exist');
        }
        const games = await Games.findAll({where: {userId: gameUser.id}});
    
        response(res, 200, { games }, null, 'List of games');
    }catch(error) {
        if(error.message.search('Validation') >= 0) {
            return response(res, 400, null, 'Email not valid');
        }
        response(res, 500, null, error.message, 'Error in getting games');
    } 
}; 
