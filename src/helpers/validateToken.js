const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const jwtSecret = process.env.JWT_SECRET;

async function validateToken(token){
    const tokenSplit = token.split(' ')[1];

    try{
        jwt.verify(tokenSplit, jwtSecret);
        return true;
    }catch(err){
        return false;
    }
}

module.exports = validateToken;