create database CardGame;

use CardGame;

create table Deck (
    deck_id varchar(20),
    created_at DateTime,
    username varchar(20),
    PRIMARY KEY (deck_id)
);

create table Card (
	id int not null auto_increment,
	deck_id varchar(20),
    image varchar(200),
    cardcode varchar(3),
    username varchar(20),
    created_at datetime,
    PRIMARY KEY (id)
);