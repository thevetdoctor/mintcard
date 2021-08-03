const response = require('../helpers/response');

module.exports = async(req, res, next) => {
    if(Object.values(req.body).filter(x => x === '').length) return response(res, 400, null, 'Please supply missing input(s)');
    next();
} 