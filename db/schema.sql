
CREATE DATABASE burgers_db;
USE burgers_db;


CREATE TABLE IF NOT EXISTS burgers (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `burger_name` varchar(255) NOT NULL,
  `devoured` BOOLEAN NOT NULL DEFAULT '0',
  `date` timestamp,
  PRIMARY KEY (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
