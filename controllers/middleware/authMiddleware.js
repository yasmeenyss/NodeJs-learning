const jwt = require("jsonwebtoken");


const authMiddleware = (req, res, next) => {

    try {

        // Authorization header

        const authHeader = req.headers.authorization;


        if (!authHeader) {

            return res.status(401).json({
                message: "Access denied. Token required"
            });

        }


        // Bearer token

        const token = authHeader.split(" ")[1];


        if (!token) {

            return res.status(401).json({
                message: "Invalid token format"
            });

        }


        // Verify JWT

        const decoded = jwt.verify(
            token,
      process.env.JWT_SECRET,
        );


        // Store user information

        req.user = decoded;


        next();

    } catch (error) {

        return res.status(401).json({
            message: "Invalid or expired token"
        });

    }

};


module.exports = authMiddleware;