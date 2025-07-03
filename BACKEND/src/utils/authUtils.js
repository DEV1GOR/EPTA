// C:\projetos\EPTA\BACKEND\src\utils\authUtils.js

const bcrypt = require('bcryptjs'); // Para fazer hash de senhas
const jwt = require('jsonwebtoken'); // Para JWT

const HASH_SALT_ROUNDS = 10; // Nível de segurança do hash (10 é um bom padrão)

// Função para gerar o hash de uma senha
const hashPassword = async (password) => {
  return await bcrypt.hash(password, HASH_SALT_ROUNDS);
};

// Função para comparar uma senha em texto claro com um hash
const comparePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

// Função para gerar um token JWT
const generateToken = (payload) => {
  // O payload será um objeto com id, email e role do usuário
  // process.env.JWT_SECRET é a chave secreta que você definiu no seu .env
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }); // Token expira em 1 hora
};

// Função para verificar (decodificar) um token JWT
const verifyToken = (token) => {
  try {
    // Verifica se o token é válido e foi assinado com sua chave secreta
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    // Se houver erro (ex: token expirado, inválido), retorna null
    console.error('Erro ao verificar token:', error.message);
    return null;
  }
};

// Exporta as funções para que possam ser usadas em outros módulos
module.exports = {
  hashPassword,
  comparePassword,
  generateToken,
  verifyToken,
};