create database LEGO;
use LEGO;
show databases ;
create table User(
    userId int primary key ,
    email varchar(100),
    password varchar(100),
    age int,
    sex varchar(100)
);
create table Game(
    gameId int primary key,
    gameName varchar(250),
    developer varchar(100)
);

create table GameLog(
    userId int,
    gameId int,
    score int
);
create table Board(
    boardId int primary key,
    datetime DATETIME,
    userId int,
    gameId int,
    title varchar(250),
    body LONGTEXT,
    viewCount int
);

create table Comment(
    commentId int primary key ,
    userId int,
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
add constraint fk_GameLog_userId foreign key (userId)
references User(userId);

# Comment fk 설정
alter table Comment
add constraint fk_Comment_userId foreign key (userId)
references User(userId);

alter table Comment
add constraint fk_Comment_boardId foreign key (boardId)
references Board(boardId);

# Board fk 설정
alter table Board
add constraint fk_Board_userId foreign key (userId)
references User(userId);

alter table Board
add constraint fk_Board_gameId foreign key (gameId)
references Game(gameId);

