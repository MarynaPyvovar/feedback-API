use sql7598974;

DROP TABLE IF EXISTS feedback;

CREATE TABLE feedback(
    id INT NOT NULL AUTO_INCREMENT,
    name CHAR(30) NOT NULL,
    email CHAR(30) NOT NULL,
    message TEXT NOT NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB;