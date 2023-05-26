drop database if exists books;
create database books;
use books;

CREATE TABLE Books (
    id INT AUTO_INCREMENT NOT NULL,
	title VARCHAR(45) NOT NULL,
    authorId INT NOT NULL UNIQUE,
    categoryId INT NOT NULL UNIQUE,
    PRIMARY KEY (id)
);

