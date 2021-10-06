const express = require("express");
const router = express.Router();

const cState = require("./controllers/stateController");
router.get("/api/state", cState.get);

const cBoard = require("./controllers/boardController");
router.get("/api/board", cBoard.get);
router.post("/api/board", cBoard.post);
router.put("/api/board", cBoard.put);
router.delete("/api/board", cBoard.delete);

const cColumn = require("./controllers/columnController");
router.get("/api/column/:board_id", cColumn.get);
router.post("/api/column", cColumn.post);
router.put("/api/column", cColumn.put);
router.delete("/api/column", cColumn.delete);

const cCard = require("./controllers/cardController");
router.get("/api/card/:column_id", cCard.get);
router.post("/api/card", cCard.post);
router.put("/api/card", cCard.put);
router.delete("/api/card", cCard.delete);

const cComment = require("./controllers/commentController");
router.get("/api/comment", cComment.get);
router.post("/api/comment", cComment.post);
router.put("/api/comment", cComment.put);
router.delete("/api/comment", cComment.delete);


module.exports = router;
