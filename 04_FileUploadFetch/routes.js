const express = require("express");
const router = express.Router();


const cPost = require("./controllers/postController");
router.get("/api/post", cPost.get);
router.post("/api/post", cPost.post);

const cMedia = require("./controllers/mediaController");
router.post("/api/media", cMedia.post);


module.exports = router;