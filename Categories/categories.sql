drop database if exists categories;
create database categories;
use categories;

CREATE TABLE Categories (
    id INT AUTO_INCREMENT NOT NULL,
	name VARCHAR(45) NOT NULL,
    PRIMARY KEY (id)
);

