const express = require("express");
const router = express.Router();
const { query } = require("../config/db");
const authMiddleware = require("../middlewares/authMiddleware");

router.use(authMiddleware);

router.post("/", async (req, res) => {
  const { name, plate } = req.body;
  if (!name || !plate) {
    return res
      .status(400)
      .json({ message: "Nome do veículo e Placa são obrigatórios." });
  }
  try {
    const result = await query(
      "INSERT INTO vehicles (name, plate) VALUES ($1, $2) RETURNING *",
      [name, plate]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Erro ao cadastrar veículo:", error);
    if (error.code === "23505") {
      return res.status(409).json({ message: "Placa já cadastrada." });
    }
    res.status(500).json({ message: "Erro interno do servidor." });
  }
});

router.get("/", async (req, res) => {
  try {
    const result = await query(
      "SELECT * FROM vehicles ORDER BY created_at DESC"
    );
    res.json(result.rows);
  } catch (error) {
    console.error("Erro ao listar veículos:", error);
    res.status(500).json({ message: "Erro interno do servidor." });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, plate } = req.body;
  if (!name || !plate) {
    return res
      .status(400)
      .json({ message: "Nome do veículo e Placa são obrigatórios." });
  }
  try {
    const result = await query(
      "UPDATE vehicles SET name = $1, plate = $2, updated_at = CURRENT_TIMESTAMP WHERE id = $3 RETURNING *",
      [name, plate, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Veículo não encontrado." });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Erro ao editar veículo:", error);
    if (error.code === "23505") {
      return res
        .status(409)
        .json({ message: "Placa já cadastrada para outro veículo." });
    }
    res.status(500).json({ message: "Erro interno do servidor." });
  }
});

router.put("/:id/archive", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await query(
      "UPDATE vehicles SET status = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2 RETURNING *",
      ["inativo", id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Veículo não encontrado." });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Erro ao arquivar veículo:", error);
    res.status(500).json({ message: "Erro interno do servidor." });
  }
});

router.put("/:id/unarchive", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await query(
      "UPDATE vehicles SET status = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2 RETURNING *",
      ["ativo", id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Veículo não encontrado." });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Erro ao desarquivar veículo:", error);
    res.status(500).json({ message: "Erro interno do servidor." });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await query(
      "DELETE FROM vehicles WHERE id = $1 RETURNING *",
      [id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Veículo não encontrado." });
    }
    res.status(204).send();
  } catch (error) {
    console.error("Erro ao remover veículo:", error);
    res.status(500).json({ message: "Erro interno do servidor." });
  }
});

module.exports = router;
