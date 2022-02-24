const jwt = require("jsonwebtoken");

/**
 *
 * @param {*} req Please provide JWT Token for verify
 * @param {*} res After verify your request should be sent
 * @param {*} next this is the middleware function
 */
const authMiddleware = (req, res, next) => {
  const token = req.header("x-auth-token"); // Find the Token using this header tag

  // Token check
  if (!token) {
    res.status(401).json({
      message: "Sorry! no token authorization denied",
    });
  } else {
    try {
      // Token Verified
      decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Send the payload data
      req.user = decoded;
      next();
    } catch (error) {
      res.status(400).json({
        message: "Sorry invalid token",
        error: error,
      });
    }
  }
};

module.exports = authMiddleware;
