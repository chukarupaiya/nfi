
const InsertInStudentTableQuery = () => {
  let string =
    "INSERT INTO `Transactions` (`token_id`, `address`, `date`, `status`,`price`) VALUES (?, ?, ?, ?,?);";
  return string;
};


const InsertInLendpoolTableQuery = () => {
  let string =
    "INSERT INTO `Lendpool` (`address`, `date`, `status`,`price`) VALUES (?, ?, ?, ?);";
  return string;
};


module.exports = {
 
  InsertInStudentTableQuery,
  InsertInLendpoolTableQuery,
 
};
