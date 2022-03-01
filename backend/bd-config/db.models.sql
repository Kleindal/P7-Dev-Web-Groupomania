CREATE DATABASE IF NOT EXISTS `groupomania`;
USE `groupomania`;
CREATE TABLE IF NOT EXISTS `users`(
    `id` INT NOT NULL AUTO_INCREMENT, 
    `email` VARCHAR(50) NOT NULL UNIQUE,
    `password` VARCHAR NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `surname` VARCHAR(50) NOT NULL, 
    `has_accepted_cgu` TINYINT NOT NULL DEFAULT '0',
    `api_token` TEXT NOT NULL, 
    PRIMARY KEY (`id`)
);

-- créer un fichier dbInit.js dans lequel j'aurais :
-- const dbCreation = '';
-- export default dbCreation;
const dbConnection = require('../config/database.js');
const dbCreation = require('../config/dbInit'); 
const mysql = require('mysql2');

bdCreation.request(dbCreation, (err, req) => {
    console.log(req);
});

CREATE TABLE IF NOT EXISTS `invitation_token` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `created_by` INT NOT NULL, 
    `user_id` INT NOT NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `Created_by` FOREIGN KEY(`created_by`) REFERENCES `users` (`id`) ON DELETE CASCADE,
    CONSTRAINT `User_id` FOREIGN KEY(`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
);