const mariadb = require('mariadb');
const pool = mariadb.createPool({
     host: 'srv1252.hstgr.io', 
     user:'u602015227_admin', 
     password: 'w:OFwVVp6K&',
     database: 'u602015227_words',
     connectionLimit: 5
});
pool.getConnection()
    .then(conn => {
    
      conn.query("SELECT 1 as val")
        .then((rows) => {
          console.log(rows); //[ {val: 1}, meta: ... ]
          //Table must have been created before 
          // " CREATE TABLE myTable (id int, val varchar(255)) "
          return conn.query("INSERT INTO words value (2, 'DDR', 'Double Data Rate')", [1, "mariadb"]);
        })
        .then((res) => {
          console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
          conn.end();
        })
        .catch(err => {
          //handle error
          console.log(err); 
          conn.end();
        })
        
    }).catch(err => {
      //not connected
    });