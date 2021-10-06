const express = require("express");
const  router = express.Router();

const cSlider = require("./controllers/SliderController");
router.get("/api/slider",cSlider.get);
router.post("/api/slider",cSlider.post);
router.delete("/api/slider",cSlider.delete);
router.put("/api/slider",cSlider.put);

const cPortfolio = require("./controllers/PortfolioController");
router.get("/api/portfolio",cPortfolio.get);
router.post("/api/portfolio",cPortfolio.post);
router.delete("/api/portfolio",cPortfolio.delete);
router.put("/api/portfolio",cPortfolio.put);
router.get("/api/portfolio/tome",cPortfolio.getToMe);

const cMedia = require("./controllers/mediaController");
router.post("/api/media", cMedia.post);
router.delete("/api/media", cMedia.del);

const cImage = require("./controllers/imageController");
router.get("/api/image",cImage.get);
//router.get("/api/image",cImage.get);
router.post("/api/image",cImage.post);
router.delete("/api/image",cImage.delete);

module.exports = router;