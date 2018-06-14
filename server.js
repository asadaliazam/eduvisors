const express = require('express');

const app = express();

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('eduvisors.db');

app.locals.data;
app.locals.firstName;
app.locals.lastName;

app.get('/api/customers', (req, res) => {
    let rows = "";

    db.all("SELECT * FROM profile", function(err, rows)
    {
      console.log(rows);
      app.locals.data = rows;
      app.locals.firstName = rows.first_name;
      app.locals.lastName = rows.last_name;
      res.json(rows);

    });
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
