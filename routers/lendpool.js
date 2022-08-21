const { UpdateLendpool } = require("../controllers/updatelendpool");
const { GetLendpoolDetails } = require("../controllers/getlenddetails");
const { registerlendpool } = require("../controllers/Addlendpool");
const { fetchalldetailslend } = require("../controllers/fetchalllend");





const router = require("express").Router();


router.post("/update",UpdateLendpool);
router.post("/fetch/getbyaddress",GetLendpoolDetails);
router.post("/add",registerlendpool);
router.post("/fetch",fetchalldetailslend);


module.exports = router;