var express = require('express');
var router = express.Router();
var mysql_odbc = require('../db/db_conn')();
var conn = mysql_odbc.init();
 
router.get('/list/:page', function(req, res, next) {
    var page = req.params.page;
    var sql = "select boardId, userId, title, date_format(modidate,'%Y-%m-%d %H:%i:%s') modidate, " +
        "date_format(regdate,'%Y-%m-%d %H:%i:%s') regdate from Board";
    conn.query(sql, function (err, rows) {
        if (err) console.error("err : " + err);
        res.render('list', {title: '게시판 리스트', rows: rows});
    });
});

router.get('/list', function(req, res, next) {
    res.redirect('/board/list/1');
});

//글쓰기 입력받을 폼
router.get('/write', function(req,res,next){
    res.render('write',{title : "게시판 글 쓰기"});
});

//게시글 글쓰기 작성
router.post('/write', function(req,res,next){
    var userId = req.body.userId;
    var title = req.body.title;
    var body = req.body.body;
    var passwd = req.body.passwd;
    var datas = [userId,title,body,passwd];
 
    var sql = "insert into board(userId, title, body, regdate, modidate, passwd, viewCount) values(?,?,?,now(),now(),?,0)";
    conn.query(sql,datas, function (err, rows) {
        if (err) console.error("err : " + err);
        res.redirect('/board/list');
    });
});

//게시글 상세보기
router.get('/read/:boardId',function(req,res,next)
{
var boardId = req.params.boardId;
    var sql = "select boardId, userId, title, body, date_format(modidate,'%Y-%m-%d %H:%i:%s') modidate, " +
        "date_format(regdate,'%Y-%m-%d %H:%i:%s') regdate, viewCount from board where boardId=?";
    conn.query(sql,[boardId], function(err,row)
    {
        if(err) console.error(err);
        res.render('read', {title:"게시글 상세", row:row[0]});
    });
});

// 작성글 업데이트(비밀번호 맞아야지 바꿀 수 있음)
router.post('/update',function(req,res,next)
{
    var boardId = req.body.boardId;
    var userId = req.body.userId;
    var title = req.body.title;
    var body = req.body.body;
    var passwd = req.body.passwd;
    var datas = [userId,title,body,boardId,passwd];
 
    var sql = "update board set userId=?, title=?,body=?, modidate=now() where boardId=? and passwd=?";
    
    conn.query(sql,datas, function(err,result)
    {
        if(err) console.error(err);
        if(result.affectedRows == 0)
        {
            res.send("<script>alert('패스워드가 일치하지 않습니다.');history.back();</script>");
        }
        else
        {
            res.redirect('/board/read/'+boardId);
        }
    });
});

// 페이징(< 1 2 3 4  ... >)
router.get('/page/:page',function(req,res,next)
{
    var page = req.params.page;
    var sql = "select boardId, userId, title, date_format(modidate,'%Y-%m-%d %H:%i:%s') modidate, " +
        "date_format(regdate,'%Y-%m-%d %H:%i:%s') regdate,hit from board";
    conn.query(sql, function (err, rows) {
        if (err) console.error("err : " + err);
        res.render('page', {title: ' 게시판 리스트', rows: rows, page:page, length:rows.length-1, page_num:10, pass:true});
        console.log(rows.length-1);
    });
});

//댓글 입력받을 폼
router.get('/read', function(req,res,next){
    res.render('write');
});


// 댓글작성
router.post('/comment', function(req,res,next){
    var userId = req.body.userId;
    var body = req.body.body;
    var datas = [userId,body];
 
    var sql = "insert into newComment(userId, body, regdate) values(?,?,now())";

    conn.query(sql, datas, function (err, rows) {
        if (err) console.error("err : " + err);
        res.redirect('/board/list');
    });
});

module.exports = router;