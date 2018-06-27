const express = require('express');
const app = express();



app.use(function(req, res, next){

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});




const bodyParser = require('body-parser');

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('eduvisors.db');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// ====================================================
//          VARIABLE DECLARATION
// ====================================================
app.locals.data;
app.locals.firstName;
app.locals.lastName;

function schoolMatchingAlgo(data, total_score, multiplier_at, multiplier_rain, multiplier_snow, o_w, o_emp, o_tui, o_col, o_rank)
{
   let obj = [];
   //console.log(15, data);
   //console.log(16, data.name);

   for (let i = 0 ; i<data.length; i++)
   {

    let institutionName = data[i].name;
    let province = data[i].province;
    let r_at = parseFloat(data[i].r_at);
    let r_snow = parseFloat(data[i].r_snow);
    let r_rain = parseFloat(data[i].r_rain);
    let c_weather = (r_at * multiplier_at) + (r_rain * multiplier_rain) + (r_snow * multiplier_snow);
    //console.log(c_weather);
    let score =  (c_weather * Math.pow(2, o_w)) + (data[i].c_emp * Math.pow(2, o_emp)) + (data[i].c_tui * Math.pow(2, o_tui)) + (data[i].c_col * Math.pow(2, o_col)) + (data[i].c_rank * Math.pow(2, o_rank));
    //console.log(1, score);
    //console.log(120, institutionName);

    let newObj = {
      institutionName: institutionName,
      province: province,
      actualScore: score,
      calculatedScore: ((Math.abs(score - total_score)).toFixed(3))
    };
    obj.push(newObj);
  }


//console.log(obj[0]);
  obj.sort(function (a, b) {
  return ((parseFloat(a.calculatedScore)) - (parseFloat(b.calculatedScore)));
});
for (let i = 0 ; i <5 ; i++)
{
    //console.log(obj[i]);
}

return obj;
//console.log(100, obj[0]);

}

function scoreCalculator(data)
{
  //  console.log("data", data)
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
  let multiplier_at = 0;
  let multiplier_rain = 0;
  let multiplier_snow = 0;



  //console.log(data);
    c_at = parseFloat(data.c_at);
    c_rain = parseFloat(data.c_rain);
    c_snow = parseFloat(data.c_snow);
    c_emp = parseFloat(data.c_emp);
    c_tui = parseFloat(data.c_tui);
    c_col = parseFloat(data.c_col);
    c_rank = parseFloat(data.c_rank);
    o_w = parseFloat(data.o_w);
    o_col = parseFloat(data.o_col);
    o_tui = parseFloat(data.o_tui);
    o_rank = parseFloat(data.o_rank);
    o_emp = parseFloat(data.o_emp);
    o_at = parseFloat(data.o_at);
    o_rain = parseFloat(data.o_rain);
    o_snow = parseFloat(data.o_snow);



  //console.log(o_snow);

  let weather_score = (c_at * Math.pow(2, o_at)) + (c_rain * Math.pow(2, o_rain)) + (c_snow * Math.pow(2, o_snow));


  if (o_at == 1)
  {
    multiplier_at = 0.5;
  }
  else if (o_at == 2)
  {
    multiplier_at = 0.3;
  }
  else if (o_at == 3)
  {
    multiplier_at = 0.2;
  }

  if (o_rain == 1)
  {
    multiplier_rain = 0.5;
  }
  else if (o_rain == 2)
  {
    multiplier_rain = 0.3;
  }
  else if (o_rain == 3)
  {
    multiplier_rain = 0.2;
  }

  if (o_snow == 1)
  {
    multiplier_snow = 0.5;
  }
  else if (o_snow == 2)
  {
    multiplier_snow = 0.3;
  }
  else if (o_snow == 3)
  {
    multiplier_snow = 0.2;
  }

  let weather_score2 = (c_at * multiplier_at) + (c_rain * multiplier_rain) + (c_snow * multiplier_snow);
  let total_score = (weather_score2 * Math.pow(2, o_w)) + (c_emp * Math.pow(2, o_emp)) + (c_tui * Math.pow(2, o_tui)) + (c_col * Math.pow(2, o_col)) + (c_rank * Math.pow(2, o_rank));
  var arr2=[];
  let schoolNames = [];

  let test = new Promise(function(resolve, reject) {
      db.each("SELECT * FROM school_rank", function(err, row) {
        arr2.push(row);
      }, function(){
              schoolNames = schoolMatchingAlgo(arr2, total_score, multiplier_at, multiplier_rain, multiplier_snow, o_w, o_emp, o_tui, o_col, o_rank);
              console.log(201, schoolNames[0]);
              resolve(schoolNames);
      });
      console.log(12000, schoolNames[0]);
});
return test;
//console.log(1400, test);
}

app.get('/api/cost_living', (req, res) => {

    db.all("SELECT * FROM cost_living", function(err, rows)
    {
      //console.log(rows);
      res.json(rows);

    });
});

app.get('/api/field_study', (req, res) => {
    let rows = "";

    db.all("SELECT * FROM field_study", function(err, rows)
    {
      //console.log(rows);
      res.json(rows);
    });
});


app.get('/api/profile', (req, res) => {
db.all("SELECT * FROM profile WHERE id=1", function(err, rows)
    {
      // console.log(rows);
      app.locals.data = rows;
      res.json(rows);
    });
});


// ====================================================
//             School Profile  Component
// ====================================================


var name;





app.post('/api/schoolProfile', (req, res) => {

  var name_obj= req.body;
  var name_school = name_obj.schoolName;
  name = name_school;
  // console.log('you posted to /signup'); //appears in console as expected



  res.json({greeting: "hello"}); //this is sent back to the browser and i can access it


  app.get('/api/signup', (req, res) => {

  var id=1;



    db.all("SELECT * FROM institute_rank WHERE institution_name='"+name+"'", function(err, rows)
    {
      console.log(name);
      //console.log(rows);
      app.locals.data = rows;
      // console.log(100,rows);
      res.json(rows);
    });



  });



});







// ====================================================
//              COST of TUITION Component
// ====================================================
app.get('/api/costoftuition', (req, res) => {

    db.all("select id, province, education from cost_living", function(err, rows)
    {
      //console.log(rows);
      res.json(rows);
    });
});

app.post('/api/register', (req, res) => {
    //console.log(req);
    res.json(req.body);
});

app.get('/api/rankings', (req, res) => {

  var arr=[];
  var arr2=[];
  var schoolNames=[];

db.each("SELECT * FROM profile_advanced WHERE id = 1", function(err, row) {
    // var name=row.name;
    // var email=row.email;
    // var newItem = {
    //     'user': name,
    //     'pwd': email
    // };
    // arr.push(newItem);
    //console.log(11, row);
    arr2 = row;
    console.log(3, arr2);
    schoolNames = scoreCalculator(arr2);
    // test.then(function(schoolNames){
    //   console.log(202, schoolNames);
    //   res.json(schoolNames);
    // });

    console.log(1100, schoolNames);
    //res.json(schoolNames);
  }, function(){
      schoolNames.then(function(schoolNames){
        console.log(1102, schoolNames);
        res.json(schoolNames);
      });
  });

});

// ====================================================
//              WEATHER Component
// ====================================================
app.locals.conta = 0;

app.get('/api/snow', (req, res) => {
    let rows = "";

    db.all("SELECT jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec FROM weather WHERE type = 'Snow' AND province='AB';", function(err,rows)
    {
          //app.locals.snowfall = rows;
          //app.locals.province = rows.province;
        //  console.log(rows);
        app.locals.conta = app.locals.conta + 1;
        console.log(`data fetched > ${app.locals.conta}`)

          res.json(rows);
        });
});




// ====================================================
const port = 5000;
app.listen(port, () => `Server running on port ${port}`);
