CREATE DATABASE IF NOT EXISTS `groupomania_v2`;

USE `groupomania_v2`;

CREATE TABLE IF NOT EXISTS `post`(
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
	`group_id` INT NOT NULL, 
    `title` VARCHAR(60) NOT NULL,
    `image_url` TEXT,
	`body` TEXT NOT NULL,
    `created_by` INT NOT NULL, 
	`created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	`updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS `group` (
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `title` VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS `user`(
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    `email` VARCHAR(50) NOT NULL UNIQUE,
    `password` VARCHAR(150) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `surname` VARCHAR(50) NOT NULL, 
    `image_url`TEXT,
	`is_admin` TINYINT NOT NULL DEFAULT '0',
    `has_accepted_cgu` TINYINT NOT NULL DEFAULT '0'
);

CREATE TABLE IF NOT EXISTS `like_post`(
  	`post_id` INT NOT NULL, 
    `user_id` INT NOT NULL,
    PRIMARY KEY (`post_id`, `user_id`)
);

INSERT INTO user (email, password, name, surname, is_admin, has_accepted_cgu)
VALUES ('admin@groupomania.fr', '$2b$10$feBk8.epmNVIbAVtYrFaVOxkYBRyCePeaNY6hyzCxouFUWEepKlaG', 'Admin', 'Admin', 1, 1);

