CREATE TABLE tuser(login TEXT,password TEXT,private BOOLEAN,created TIMESTAMP,updated TIMESTAMP);

CREATE TABLE tactivity(idActivity SERIAL, login TEXT,start TIME,length INTEGER,description TEXT,created TIMESTAMP,updated TIMESTAMP);
