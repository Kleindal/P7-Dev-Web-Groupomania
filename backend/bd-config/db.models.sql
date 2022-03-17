CREATE DATABASE IF NOT EXISTS `groupomania`;
USE `groupomania`;
CREATE TABLE IF NOT EXISTS `users`(
    `id` INT NOT NULL AUTO_INCREMENT, 
    `email` VARCHAR(50) NOT NULL UNIQUE,
    `password` VARCHAR(150) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `surname` VARCHAR(50) NOT NULL, 
    `has_accepted_cgu` TINYINT NOT NULL DEFAULT '0',
    `api_token` TEXT NOT NULL, 
    PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `invitation_token` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `created_by` INT NOT NULL, 
    `user_id` INT NOT NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `Created_by` FOREIGN KEY(`created_by`) REFERENCES `users` (`id`) ON DELETE CASCADE,
    CONSTRAINT `User_id` FOREIGN KEY(`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS `message` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `author_id` INT NOT NULL, 
    `text` TEXT NOT NULL,
    `like_user` INT NOT NULL, 
    `group_id` INT NOT NULL, 
    PRIMARY KEY (`id`),
    CONSTRAINT `Author_id` FOREIGN KEY(`author_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
    CONSTRAINT `Group_id` FOREIGN KEY(`group_id`) REFERENCES `groups` (`id`) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS `groups` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `is_locked` TINYINT NOT NULL DEFAULT '0',
    PRIMARY KEY (`id`)
); 

CREATE TABLE IF NOT EXISTS `attachement` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `filename` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `Filename` FOREIGN KEY(`filename`) REFERENCES `message` (`id`) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS `comment` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `message_id` INT NOT NULL, 
    `like` INT NOT NULL, 
    `dislike` INT NOT NULL, 
    `filename` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `Like` FOREIGN KEY(`like`) REFERENCES `message` (`id`) ON DELETE CASCADE,
    CONSTRAINT `Dislike` FOREIGN KEY(`dislike`) REFERENCES `message` (`id`) ON DELETE CASCADE,
    CONSTRAINT `Message_id` FOREIGN KEY(`message_id`) REFERENCES `message` (`id`) ON DELETE CASCADE
);


-- bdCreation.request(dbCreation, (err, req) => {
--     console.log(req);
-- });
-- -- créer un fichier dbInit.js dans lequel j'aurais :
-- -- const dbCreation = '';
-- -- export default dbCreation;
-- const dbConnection = require('../config/database.js');
-- const dbCreation = require('../bd-config/dbInit'); 
-- const mysql = require('mysql2');
