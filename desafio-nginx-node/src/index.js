const express = require("express");
const app = express();
const port = 3000;
const config = {
  host: "mysql",
  user: "root",
  password: "root",
  database: "nodedb",
};

const mysql = require("mysql");
const connection = mysql.createConnection(config);

const createtablesql = `CREATE TABLE IF NOT EXISTS people (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(255), PRIMARY KEY(id));`;
connection.query(createtablesql);

const randomName = `FC-${Math.random()}`;
const insertsql = `INSERT INTO people(name) values('${randomName}');`;
connection.query(insertsql);

let names = [];

connection.query("SELECT name FROM people;", undefined, (err, result) => {
  names = result.map((item) => `<h3>${item.name}</h3>`);
});
connection.end();

app.get("/", (req, res) => {
  res.send(`<h1>Full Cycle</h1>\n${names}`);
});

app.listen(port, () => {
  console.log("Rodando na porta " + port);
});
