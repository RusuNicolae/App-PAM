const express = require("express");
const farmCtrl = require("../controller/farm.controller");

const router = express.Router();
router.get("/farm", farmCtrl.farm);
router.get("/farm/:strada", farmCtrl.farmById);

module.exports = router;