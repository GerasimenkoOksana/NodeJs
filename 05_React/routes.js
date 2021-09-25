const express = require("express");
const router = express.Router();

const cEntity = require("./controllers/entityController");
router.get("/api/entities", cEntity.get);
router.post("/api/entities", cEntity.post);
router.put("/api/entities", cEntity.put);
router.delete("/api/entities", cEntity.delete);

module.exports = router;