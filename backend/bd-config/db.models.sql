CREATE DATABASE IF NOT EXISTS `groupomania`;
USE `groupomania`;
CREATE TABLE IF NOT EXISTS `user`(
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    `email` VARCHAR(50) NOT NULL UNIQUE,
    `password` VARCHAR(150) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `surname` VARCHAR(50) NOT NULL, 
	`is_admin` TINYINT NOT NULL DEFAULT '0',
    `has_accepted_cgu` TINYINT NOT NULL DEFAULT '0'
);

CREATE TABLE IF NOT EXISTS `invitation_token` (
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `created_by` INT NOT NULL, 
    `user_id` INT NOT NULL,
    CONSTRAINT `Created_by` FOREIGN KEY(`created_by`) REFERENCES `user` (`id`) ON DELETE CASCADE,
    CONSTRAINT `User_id` FOREIGN KEY(`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS `group` (
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `title` VARCHAR(50) NOT NULL,
    `created_by` INT NOT NULL
);

CREATE TABLE IF NOT EXISTS `group_user` (
    `group_id` INT NOT NULL,
    `user_id` INT NOT NULL
);

CREATE TABLE IF NOT EXISTS `message` (
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `author_id` INT NOT NULL, 
    `group_id` INT NOT NULL,
    `text` TEXT NOT NULL,
    CONSTRAINT `Group_id` FOREIGN KEY(`group_id`) REFERENCES `group` (`id`) ON DELETE CASCADE
    -- `like_user` INT NOT NULL
);

-- CREATE TABLE IF NOT EXISTS `comment` (
--     `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--     `message_id` INT NOT NULL, 
--     `like` INT NOT NULL, 
--     `dislike` INT NOT NULL, 
--     CONSTRAINT `Like` FOREIGN KEY(`like`) REFERENCES `message` (`id`) ON DELETE CASCADE,
--     CONSTRAINT `Dislike` FOREIGN KEY(`dislike`) REFERENCES `message` (`id`) ON DELETE CASCADE,
--     CONSTRAINT `Message_id` FOREIGN KEY(`message_id`) REFERENCES `message` (`id`) ON DELETE CASCADE
-- );

CREATE TABLE IF NOT EXISTS `attachement` (
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `filename` VARCHAR(255) NOT NULL,
    `message_id` INT NOT NULL,
    CONSTRAINT `Message_id` FOREIGN KEY(`message_id`) REFERENCES `message` (`id`) ON DELETE CASCADE
);