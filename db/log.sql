create database LEGO;
use LEGO;
show databases ;
create table Users(
    email varchar(255) primary key,
    password varchar(255),
    age int,
    sex char
);
create table Game(
    gameId int primary key,
    gameName varchar(255),
    developer varchar(255)
);

create table GameLog(
    email varchar(255),
    gameId int,
    score int
);
create table Boards(
    boardId int NOT NULL AUTO_INCREMENT,
    email varchar(255),
    title varchar(255),
    body TEXT,
    regdate datetime NOT NULL,
    modidate datetime NOT NULL,
    viewCount int,
    PRIMARY KEY (boardId)
);

create table Comments(
    commentId int NOT NULL AUTO_INCREMENT,
    email varchar(255),
    body TEXT,
    boardId int,
    regdate DATETIME,
    PRIMARY KEY (commentId)
);

show tables;

# GameLog fk 설정
alter table GameLog
add constraint fk_GameLog_gameId foreign key (gameId)
references Game(gameId);

alter table GameLog
add constraint fk_GameLog_email foreign key (email)
references Users(email);

# Comment fk 설정
alter table Comments
add constraint fk_Comment_email foreign key (email)
references Users(email);

alter table Comments
add constraint fk_Comment_boardId foreign key (boardId)
references Boards(boardId);

# Board fk 설정
alter table Boards
add constraint fk_Board_email foreign key (email)
references Users(email);
