const express = require('express');
const router = express.Router();
const { query } = require('../config/db'); 
const { hashPassword, comparePassword, generateToken } = require('../utils/authUtils'); 

router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Email e senha são obrigatórios.' });
  }

  try {
    const existingUser = await query('SELECT * FROM users WHERE email = $1', [email]);
    if (existingUser.rows.length > 0) {
      return res.status(409).json({ message: 'Email já registrado.' });
    }

    const hashedPassword = await hashPassword(password);
    await query('INSERT INTO users (email, password) VALUES ($1, $2)', [email, hashedPassword]);
    res.status(201).json({ message: 'Usuário registrado com sucesso.' });
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
});


router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Email e senha são obrigatórios.' });
  }

  try {
    const result = await query('SELECT * FROM users WHERE email = $1', [email]);
    const user = result.rows[0];

    if (!user) {
      return res.status(400).json({ message: 'Credenciais inválidas.' });
    }

    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Credenciais inválidas.' });
    }

    const token = generateToken({
        id: user.id,
        email: user.email,
        role: user.role 
    });
    res.json({ token, message: 'Login bem-sucedido.' });

  } catch (error) {
      console.error('Erro ao logar usuário:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
});

module.exports = router;