CREATE TABLE IF NOT EXISTS `epiz_28912886_library`.`tipo_usuário` (
  `idtipo_usuário` INT NOT NULL AUTO_INCREMENT,
  `descrição_usuario` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idtipo_usuário`))
ENGINE = InnoDB;



CREATE TABLE IF NOT EXISTS `epiz_28912886_library`.`eixo` (
  `ideixo` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`ideixo`))
ENGINE = InnoDB;



CREATE TABLE IF NOT EXISTS `epiz_28912886_library`.`curso` (
  `idcurso` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `eixo_ideixo` INT NOT NULL,
  PRIMARY KEY (`idcurso`),
  INDEX `fk_curso_eixo_idx` (`eixo_ideixo` ASC),
  CONSTRAINT `fk_curso_eixo`
    FOREIGN KEY (`eixo_ideixo`)
    REFERENCES `epiz_28912886_library`.`eixo` (`ideixo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;



CREATE TABLE IF NOT EXISTS `epiz_28912886_library`.`usuário` (
  `idusuário` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `senha` VARCHAR(45) NOT NULL,
  `curso_idcurso` INT NOT NULL,
  `tipo_usuário_idtipo_usuário` INT NOT NULL,
  PRIMARY KEY (`idusuário`),
  INDEX `fk_usuário_curso1_idx` (`curso_idcurso` ASC) ,
  INDEX `fk_usuário_tipo_usuário1_idx` (`tipo_usuário_idtipo_usuário` ASC) ,
  CONSTRAINT `fk_usuário_curso1`
    FOREIGN KEY (`curso_idcurso`)
    REFERENCES `epiz_28912886_library`.`curso` (`idcurso`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuário_tipo_usuário1`
    FOREIGN KEY (`tipo_usuário_idtipo_usuário`)
    REFERENCES `epiz_28912886_library`.`tipo_usuário` (`idtipo_usuário`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `epiz_28912886_library`.`trabalho` (
  `idtrabalho` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(45) NOT NULL,
  `ano` INT NOT NULL,
  `numeropaginas` INT NOT NULL,
  `resumo` LONGTEXT NOT NULL,
  `orientador` VARCHAR(45) NOT NULL,
  `coorientador` VARCHAR(45) NOT NULL,
  `arquivo` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idtrabalho`))
ENGINE = InnoDB;



CREATE TABLE IF NOT EXISTS `epiz_28912886_library`.`historico` (
  `idhistorico` INT NOT NULL AUTO_INCREMENT,
  `date` DATE NOT NULL,
  `hora` TIME NOT NULL,
  `usuário_idusuário` INT NOT NULL,
  `trabalho_idtrabalho` INT NOT NULL,
  PRIMARY KEY (`idhistorico`),
  INDEX `fk_historico_usuário1_idx` (`usuário_idusuário` ASC),
  INDEX `fk_historico_trabalho1_idx` (`trabalho_idtrabalho` ASC),
  CONSTRAINT `fk_historico_usuário1`
    FOREIGN KEY (`usuário_idusuário`)
    REFERENCES `epiz_28912886_library`.`usuário` (`idusuário`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_historico_trabalho1`
    FOREIGN KEY (`trabalho_idtrabalho`)
    REFERENCES `epiz_28912886_library`.`trabalho` (`idtrabalho`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;



CREATE TABLE IF NOT EXISTS `epiz_28912886_library`.`trabalho_has_usuário` (
  `trabalho_idtrabalho` INT NOT NULL,
  `usuário_idusuário` INT NOT NULL,
  PRIMARY KEY (`trabalho_idtrabalho`, `usuário_idusuário`),
  INDEX `fk_trabalho_has_usuário_usuário1_idx` (`usuário_idusuário` ASC)  ,
  INDEX `fk_trabalho_has_usuário_trabalho1_idx` (`trabalho_idtrabalho` ASC)  ,
  CONSTRAINT `fk_trabalho_has_usuário_trabalho1`
    FOREIGN KEY (`trabalho_idtrabalho`)
    REFERENCES `epiz_28912886_library`.`trabalho` (`idtrabalho`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_trabalho_has_usuário_usuário1`
    FOREIGN KEY (`usuário_idusuário`)
    REFERENCES `epiz_28912886_library`.`usuário` (`idusuário`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;



