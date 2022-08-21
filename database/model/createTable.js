

const StudentTableCreateQuery = () => {
  string =
    "CREATE TABLE `Transactions` (`token_id` INT NOT NULL ,`address` varchar(100) NOT NULL ,`date` varchar(255),`status` INT NOT NULL,`price` varchar(20) NOT NULL, PRIMARY KEY (`address`));";
  return string;
};



const LendpoolTableCreateQuery = () => {
  string =
    "CREATE TABLE `Lendpool` (`address` varchar(100) NOT NULL ,`date` varchar(255),`status` INT NOT NULL,`price` varchar(20) NOT NULL, PRIMARY KEY (`address`));";
  return string;
};

// CREATE TABLE `Students` (
//     `student_id` INT NOT NULL,
//     `FirstName` varchar(255) NOT NULL,
//     `Email` varchar(255) NOT NULL UNIQUE,
//     `LastName` varchar(255),
//     `Standard` INT NOT NULL,
//     `Board` varchar(10) NOT NULL,
//     `GenderPerference` INT NOT NULL,
//     `Phno` varchar(20) NOT NULL,
//     `Password` VARCHAR(255) NOT NULL,
//     `Address` varchar(255) NOT NULL,
//     `district` varchar(255) NOT NULL,
//     `city` varchar(255) NOT NULL,
//     `country` varchar(255) NOT NULL,
//     `state` varchar(255) NOT NULL,
//     `postal_code` INT NOT NULL,
//     PRIMARY KEY (`student_id`),
//     FOREIGN KEY (student_id) REFERENCES Users(user_id),
//     FOREIGN KEY (Email) REFERENCES Users(Email),
// );

module.exports = {
  
  
  
  StudentTableCreateQuery,
  LendpoolTableCreateQuery,
 
};

//ALTER TABLE `Teachers` ADD CONSTRAINT `Teachers_fk0` FOREIGN KEY (`teacher_id`) REFERENCES `User`(`user_id`);

// ALTER TABLE `Teachers` ADD CONSTRAINT `Teachers_fk1` FOREIGN KEY (`Email`) REFERENCES `User`(`Email`);

// ALTER TABLE `classroom` ADD CONSTRAINT `classroom_fk0` FOREIGN KEY (`id_student`) REFERENCES `Student`(`student_id`);

// ALTER TABLE `classroom` ADD CONSTRAINT `classroom_fk1` FOREIGN KEY (`id_teacher`) REFERENCES `Teachers`(`teacher_id`);

// ALTER TABLE `Student` ADD CONSTRAINT `Student_fk0` FOREIGN KEY (`student_id`) REFERENCES `User`(`user_id`);

// ALTER TABLE `Student` ADD CONSTRAINT `Student_fk1` FOREIGN KEY (`Email`) REFERENCES `User`(`Email`);

// ALTER TABLE `ratings` ADD CONSTRAINT `ratings_fk0` FOREIGN KEY (`id_student`) REFERENCES `Student`(`student_id`);

// ALTER TABLE `ratings` ADD CONSTRAINT `ratings_fk1` FOREIGN KEY (`id_teacher`) REFERENCES `Teachers`(`teacher_id`);

// ALTER TABLE `classes` ADD CONSTRAINT `classes_fk0` FOREIGN KEY (`id_classroom`) REFERENCES `classroom`(`classroom_id`);
