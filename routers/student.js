
const { UpdateTransactions } = require("../controllers/updateStudent");
const { fetchalldetails } = require("../controllers/fetchall");
const { GetTransactionsDetails } = require("../controllers/getStudentDetails");
const { register } = require("../controllers/Adddata");





const router = require("express").Router();


router.post("/update",UpdateTransactions);
router.post("/fetch",fetchalldetails);
router.post("/fetch/getbyaddress",GetTransactionsDetails);
router.post("/add",register);


module.exports = router;
