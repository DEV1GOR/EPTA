const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const HASH_SALT_ROUNDS = 10;

const hashPassword = async (password) => {
  return await bcrypt.hash(password, HASH_SALT_ROUNDS);
};

const comparePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    console.error("Erro ao verificar token:", error.message);
    return null;
  }
};

module.exports = {
  hashPassword,
  comparePassword,
  generateToken,
  verifyToken,
};
