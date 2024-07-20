const jwt = require('jsonwebtoken');
const SECRET_JWT = process.env.SECRET_JWT;

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({message: 'Authorization header must be provided and must be a Bearer token'});
    }

    const token = authHeader.split('Bearer ')[1];
    if (!token) {
        return res.status(401).json({message: 'Authentication token must be provided'});
    }

    jwt.verify(token, SECRET_JWT, (err, user) => {
        if (err) {
            return res.status(403).json({message: 'Invalid or expired token'});
        }
        // req.user = user; attach the decoded user information to the request object
        next();
    });
};

module.exports = authenticateJWT;

