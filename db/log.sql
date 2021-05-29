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
create table Board(
    boardId int primary key,
    datetime DATETIME,
    email varchar(255),
    gameId int,
    title varchar(255),
    body LONGTEXT,
    viewCount int
);

create table Comment(
    commentId int primary key ,
    email varchar(255),
    boardId int,
    datetime DATETIME,
    body LONGTEXT
);

show tables ;

# GameLog fk 설정
alter table GameLog
add constraint fk_GameLog_gameId foreign key (gameId)
references Game(gameId);

alter table GameLog
add constraint fk_GameLog_email foreign key (email)
references Users(email);

# Comment fk 설정
alter table Comment
add constraint fk_Comment_email foreign key (email)
references Users(email);

alter table Comment
add constraint fk_Comment_boardId foreign key (boardId)
references Board(boardId);

# Board fk 설정
alter table Board
add constraint fk_Board_email foreign key (email)
references Users(email);

alter table Board
add constraint fk_Board_gameId foreign key (gameId)
references Game(gameId);

