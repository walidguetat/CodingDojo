-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Books_schema
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Books_schema
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Books_schema` DEFAULT CHARACTER SET utf8 ;
USE `Books_schema` ;

-- -----------------------------------------------------
-- Table `Books_schema`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Books_schema`.`users` (
  `id_user` INT NOT NULL AUTO_INCREMENT,
  `name_user` VARCHAR(45) NULL,
  `created_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_user`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Books_schema`.`books`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Books_schema`.`books` (
  `id_books` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NULL,
  `number_of_page` INT NULL,
  `created_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_books`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Books_schema`.`books_favorite`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Books_schema`.`books_favorite` (
  `user_id_user` INT NOT NULL,
  `book_id_books` INT NOT NULL,
  INDEX `fk_books_favorite_users1_idx` (`user_id_user` ASC) VISIBLE,
  INDEX `fk_books_favorite_books1_idx` (`book_id_books` ASC) VISIBLE,
  CONSTRAINT `fk_books_favorite_users1`
    FOREIGN KEY (`user_id_user`)
    REFERENCES `Books_schema`.`users` (`id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_books_favorite_books1`
    FOREIGN KEY (`book_id_books`)
    REFERENCES `Books_schema`.`books` (`id_books`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
