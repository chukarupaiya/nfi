const { InsertInStudentTableQuery} = require("../database/model/insertTable");
  const { select } = require("../service/select");
  const { insert } = require("../service/insert");
  const { deleteRow } = require("../service/delete");
  const { deleteFromTable } = require("../database/model/deleteTable");
  
  exports.register = async (req, res) => {
    console.log("\n[+]  request", req.method, req.originalUrl);
    console.log("[+] ", req.body);
   
    try {    insert(
                InsertInStudentTableQuery(),
                "Transactions",
                [
                    
                    req.body.token_id,
                    req.body.address,
                    req.body.date,
                    req.body.status,
                    req.body.price
                                                
                ],
                (err) => {
                    if (!err) {
                        console.log(`[+]  `, {
                            statusMessage: "transaction added succeed",
                            status: true,
                        });
                        res.send({
                            statusMessage: "transaction added succeed",
                            status: true,
                        });
                        } 
                    }
                );
            } catch (err) {
                console.log(`[-]  `, {
                error: err,
          statusMessage: "something went wrong in function",
          status: false,
        });
        res.send({
          error: err,
          statusMessage: "something went wrong",
          status: false,
        });
      }
    
  };
  