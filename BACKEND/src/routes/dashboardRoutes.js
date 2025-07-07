const express = require("express");
const router = express.Router();
const { query } = require("../config/db");
const authMiddleware = require("../middlewares/authMiddleware");

router.use(authMiddleware);

router.get("/", async (req, res) => {
  try {
    const totalVehicles = await query("SELECT COUNT(*) FROM vehicles");
    const activeVehicles = await query(
      "SELECT COUNT(*) FROM vehicles WHERE status = 'ativo'"
    );
    const inactiveVehicles = await query(
      "SELECT COUNT(*) FROM vehicles WHERE status = 'inativo'"
    );

    res.json({
      totalVehicles: parseInt(totalVehicles.rows[0].count, 10),
      activeVehicles: parseInt(activeVehicles.rows[0].count, 10),
      inactiveVehicles: parseInt(inactiveVehicles.rows[0].count, 10),
    });
  } catch (error) {
    console.error("Erro ao buscar dados do dashboard:", error);
    res.status(500).json({ message: "Erro interno do servidor." });
  }
});

module.exports = router;
