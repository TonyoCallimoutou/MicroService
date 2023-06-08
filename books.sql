drop database if exists books;
create database books;
use books;

CREATE TABLE Categories (
    id INT AUTO_INCREMENT NOT NULL,
	name VARCHAR(45) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE Authors (
    id INT AUTO_INCREMENT NOT NULL,
	name VARCHAR(45) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE Books (
    id INT AUTO_INCREMENT NOT NULL,
	title VARCHAR(45) NOT NULL,
    authorId INT NOT NULL UNIQUE,
    categoryId INT NOT NULL UNIQUE,
    PRIMARY KEY (id),
    FOREIGN KEY (authorId) REFERENCES Authors(id) ON DELETE CASCADE,
    FOREIGN KEY (categoryId) REFERENCES Categories(id) ON DELETE CASCADE
);