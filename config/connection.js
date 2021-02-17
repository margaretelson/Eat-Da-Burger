const mysql = require('mysql');
const exphbs = require('express-handlebars');
const express = require('express');

const app = express();

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Dre525252',
    database: 'burgers_db',
  });
}


connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});


app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

module.exports = connection;