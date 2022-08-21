const { update } = require("../service/update");

exports.UpdateLendpool = async (req, res) => {
  console.log("\n[+]  request", req.method, req.originalUrl);
  console.log("[+] ", req.body);

  const updateQuery = {
    table: "Lendpool",
    setfield: [],
    condition: [`address='${req.body.address}'`],
  };

  

  if (req.body.address != undefined) {
    updateQuery.setfield.push(`address='${req.body.address}'`);
  }
  
  if (req.body.date != undefined) {
    updateQuery.setfield.push(`date='${req.body.date}'`);
  }
  if (req.body.status != undefined) {
    updateQuery.setfield.push(`status='${req.body.status}'`);
  }
  if (req.body.price != undefined) {
    updateQuery.setfield.push(`price='${req.body.price}'`);
  }
  
  
  await update(updateQuery, async (err, result) => {
    if (err) {
      console.log(`[-]  `, {
        error: err,
        statusMessage: "something went wrong",
        status: false,
      });
      res.send({
        error: err,
        statusMessage: "something went wrong",
        status: false,
      });
    } else {
      console.log(`[+]  `, {
        statusMessage: "table successfully updated",
        status: true,
      });
      res.send({
        statusMessage: "table successfully updated",
        status: true,
      });
    }
  });
};
