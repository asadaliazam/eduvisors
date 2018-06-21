const express = require('express');

const app = express();

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('eduvisors.db');

app.locals.data;
app.locals.firstName;
app.locals.lastName;

function scoreCalculator(data)
{
  let c_at =  0;
  let c_rain = 0;
  let c_snow = 0;
  let c_emp = 0;
  let c_tui = 0;
  let c_col = 0;
  let c_rank = 0;
  let o_w = 0;
  let o_col = 0;
  let o_tui = 0;
  let o_rank = 0;
  let o_emp = 0;
  let o_at = 0;
  let o_rain = 0;
  let o_snow = 0;

  console.log(data);
  for (let record of data)
  {
    c_at = parseFloat(record.c_at);
    c_rain = parseFloat(record.c_rain);
    c_snow = parseFloat(record.c_snow);
    c_emp = parseFloat(record.c_emp);
    c_tui = parseFloat(record.c_tui);
    c_col = parseFloat(record.c_col);
    c_rank = parseFloat(record.c_rank);
    o_w = parseFloat(record.o_w);
    o_col = parseFloat(record.o_col);
    o_tui = parseFloat(record.o_tui);
    o_rank = parseFloat(record.o_rank);
    o_emp = parseFloat(record.o_emp);
    o_at = parseFloat(record.o_at);
    o_rain = parseFloat(record.o_rain);
    o_snow = parseFloat(record.o_snow);
  }


  console.log(o_snow);

  let weather_score = (c_at * Math.pow(2, o_at)) + (c_rain * Math.pow(2, o_rain)) + (c_snow * Math.pow(2, o_snow));

  let weather_score2 = (c_at * 0.5) + (c_rain * 0.3) + (c_snow * 0.2);

  let total_score = (weather_score2 * Math.pow(2, o_w)) + (c_emp * Math.pow(2, o_emp)) + (c_tui * Math.pow(2, o_tui)) + (c_col * Math.pow(2, o_col)) + (c_rank * Math.pow(2, o_rank));

  console.log(weather_score2);

  console.log(total_score);

  return total_score;
}

app.get('/api/profile', (req, res) => {
    let rows = "";

    db.all("SELECT * FROM profile where id=1", function(err, rows)
    {
      console.log(rows);
      app.locals.data = rows;
      app.locals.firstName = rows.first_name;
      app.locals.lastName = rows.last_name;
      app.locals.email = rows.email;
      app.locals.field_study = rows.field_study;
      app.locals.lvl_educ = rows.lvl_educ;
      res.json(rows);

    });
});

app.get('/api/costoftuition', (req, res) => {
    let rows = "";

    db.all("select id, province, education from cost_living", function(err, rows)
    {
      console.log(rows);

      res.json(rows);

    });
});
app.get('/api/rankings', (req, res) => {
    let rows = "";

    db.all("SELECT * FROM profile_advanced WHERE id = 1", function(err, rows)
    {
      //console.log(rows);
      app.locals.data = rows;
      app.locals.firstName = rows.first_name;
      app.locals.lastName = rows.last_name;
      let total_score = scoreCalculator(rows);
      res.json(total_score);

    });
});

const port = 5000;
// ==================================
// new local variable
app.locals.snowfall;
app.locals.province;

app.get('/api/snow', (req, res) => {
    let rows = "";

    db.all("SELECT * FROM weather WHERE info = 'Snow';", function(err,rows)
    {
          //app.locals.snowfall = rows;
          app.locals.province = rows.province;
          // console.log(rows);
          res.json(rows);
          //res.send(JSON.stringify(results));
        });
});


const port = 5000;
app.listen(port, () => `Server running on port ${port}`);
