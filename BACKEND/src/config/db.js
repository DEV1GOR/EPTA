// Primeira vez usando PostgreSQL, isso aqui é para configurar a conexão com o banco de dados PostgreSQL usando o pacote 'pg'.

const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.on("connect", () => {
  console.log("Conectado ao PostgreSQL!");
});

pool.on("error", (err) => {
  console.error("Erro na conexão com o PostgreSQL:", err.message, err.stack);
});

module.exports = {
  query: (text, params) => {
    return pool.query(text, params);
  },
  pool: pool,
};
