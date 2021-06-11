create database LEGO;

use LEGO;
show databases ;
create table Users(
    userId varchar(255) primary key,
    password varchar(255),
    age int
);
create table Games(
    gameId int NOT NULL AUTO_INCREMENT primary key,
    gameName varchar(255),
    userId varchar(255),
    image VARCHAR (255)
);

create table GameLogs(
    userId varchar(255),
    gameId int,
    score int
);
create table Boards(
    boardId int NOT NULL AUTO_INCREMENT,
    userId varchar(255),
    title varchar(255),
    body TEXT,
    regdate datetime NOT NULL,
    modidate datetime NOT NULL,
    viewCount int,
    PRIMARY KEY (boardId)
);

create table Comments(
    commentId int NOT NULL AUTO_INCREMENT,
    userId varchar(255),
    body TEXT,
    boardId int,
    regdate DATETIME,
    PRIMARY KEY (commentId)
);

show tables;

# GameLogs fk 설정
alter table GameLogs
add constraint fk_GameLogs_gameId foreign key (gameId)
references Games(gameId);

alter table GameLogs
add constraint fk_GameLogs_userId foreign key (userId)
references Users(userId);

# Comment fk 설정
alter table Comments
add constraint fk_Comment_userId foreign key (userId)
references Users(userId);

alter table Comments
add constraint fk_Comment_boardId foreign key (boardId)
references Boards(boardId);

# Board fk 설정
alter table Boards
add constraint fk_Board_userId foreign key (userId)
references Users(userId);