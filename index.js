const express = require("express");
const { createInitialTable } = require("./controllers/createInitialTable");
const app = express();
const { db } = require("./database/config");

const studentRouter = require("./routers/student");
const lendpoolRouter = require("./routers/lendpool");


app.use(express.json());


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","*");
  next();
});



app.listen( process.env.PORT ||  3001, () => {
  db.connect(function (err) {
    if (err) {
      return console.error("[-] error: " + err.message);
    }
    console.log("[+] Connected to the MySQL server.");
    createInitialTable();
    
    app.use("/student", studentRouter);
    app.use("/lendpool", lendpoolRouter);
    
  });
  console.log("[+] Server listening");
});

/////Todo: allowing after checking status
/////TODO: update each profile
/////todo:retrieving class
/////todo: mailling
/////todo:normal class room

//* class status
// 0-requested
// 1-accepted
// 2-rejected
// 3-completed

//*gender
//1-male
//0-female
//2-not prefered

//* position
// 1-teacher
// 0-student
// 2-admin
//3-superadmin

//*board
// 1-"CBSE"
// 2-icse
// 3-igcse
// 4-ib
//changed login , register ,createinitialtable insert Table for super admimn and admin
//created createAdmin and added admin table

//added verify is admin and superadmin
