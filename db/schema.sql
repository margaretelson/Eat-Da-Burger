CREATE DATABASE q3kd67xy6o164hgd;
USE q3kd67xy6o164hgd;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	hungry BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);