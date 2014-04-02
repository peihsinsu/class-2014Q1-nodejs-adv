Class2 Lab2
====

## 說明

重構基礎課程Class4-lab3，將資料面使用CouchDB改寫

## 程式片段

使用CouchDB操作部分，取代之前MySQL CRUD動作部分。

```
var util = require('util')
  , cradle = require('cradle')
  , dbusername = '' // 填入你的姓名
  , dbpassword = '' // 填入你的密碼
  , databasename = '' // 填入你的資料表名稱
  , db_address = '' //填入你的DB Server位置
  , db_port = 5984 // 如果不是使用預設port，需要修改
  , db = new(cradle.Connection)('http://' + db_address, db_port, {
    auth: { username: dbusername, password: dbpassword },
    cache: false,
    raw: false
  }).database(databasename);

var script = { ...
	"createProduct": function(vo, callback){
		db.save(vo....);
	}
}
exports.jobs = script;
```
