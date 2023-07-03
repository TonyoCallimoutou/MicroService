drop database if exists authors;
create database authors;
use authors;

CREATE TABLE Authors (
    id INT AUTO_INCREMENT NOT NULL,
	name VARCHAR(45) NOT NULL,
    PRIMARY KEY (id)
);