const { verifyToken } = require("../Utils/jwtUtils");

const authenticate = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    res.status(401).json({ message: "No token provided" });
  } else {
    try {
      const payload = verifyToken(token, process.env.JWT_SECRET);
      req.user = payload;
      next();
    } catch (err) {
      res.status(401).json({ message: "Invalid token", error: err });
    }
  }
};

module.exports = authenticate;
