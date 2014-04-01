var util = require('util')
  , cradle = require('cradle')
  , dbusername = 'admin' // 填入你的姓名
  , dbpassword = 'admin' // 填入你的密碼
  , databasename = 'simonsu' // 填入你的資料表名稱
  , db_address = '211.78.254.58' //填入你的DB Server位置
  , db_port = 5984 // 如果不是使用預設port，需要修改
  , db = new(cradle.Connection)('http://' + db_address, db_port, {
    auth: { username: dbusername, password: dbpassword },
    cache: false,
    raw: false
  }).database(databasename);


exports.queryProduct = function(id, callback) {
  console.log('Query of %s', id);
  db.get( id, function (err, doc) {
    if(err) console.log(err);
    callback(err, doc);
  });
}

exports.queryViewProduct = function(id, callback) {
  console.log('Query of %s', id);
  db.view( 'domain/userDomain',{key: userid}, function (err, doc) {
    if(err) console.log(err);
    callback(err, doc);
  });
}

exports.createProduct = function(id, doc, callback) {
  db.save(id, doc, function(err, res){
    if(err) console.log(err);
    callback(err, res);
    //db.compact();
  });
}

exports.updateProduct = function(id, doc, callback) {
  db.merge(id, doc, function (err, res) {
    if(err) console.log(err);
    callback(err, res);
  });
}

exports.deleteProduct = function(id, rev, callback) {
  db.remove(id, rev, function(err, res){
    if(err) console.log(err);
    callback(err, res);
  })
}

exports.deleteProduct2 = function(id, callback) {
  db.remove(id, function(err, res){
    if(err) console.log(err);
    callback(err, res);
  })
}
/** others

//Create Database:
var db = c.database('database_name');
db.create();

//Delete Database
db.destroy(callback);
**/


