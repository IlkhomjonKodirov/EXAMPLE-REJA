console.log('Web serverni boshlash');
const express = require("express");
const app = express();
const fs = require('fs');

//MongoDB Call
const db = require("./server").db();// mongoDB instanceni(objectini) olib beradi. Va shu orqali CRUD operatsiyalarini amalga oshiramiz

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if(err) {
    console.log("ERROR:", err);
  }else {
    user = JSON.parse(data);
  }
})

// 1 -bosqich: Kirish kodlari 
app.use(express.static("public")); 
app.use(express.json());
app.use(express.urlencoded({extended: true})); 

// 2-bosqich: Sessionga bog'liq kodlar

// 3 - bosqich: viewsga bog'liq kodlar. Beckendda (view) frontend yasaymiz ejs yordamida

app.set("views", "views");
app.set("view engine", "ejs");

// 4 - bosqich: Routingga bog'liq kodlar
// post - ma'lumotni o'zi bilan olib kelib databasega o'sha ma'lumotni yozadi
app.post("/create-item", (req, res) => {
  // console.log(req.body);
  // res.end("success");// biror reja yozib enter bosilganda ekranda success yozuvi va terminal serverda { reja: "IT ni o'rganamiz" } hosil bo'ladi.
  /* Endi shu rejamizni databasega yozamiz */
  console.log('user entered /create-item');
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
    if(err) {
      console.log(err);
      res.end('something went wrong');
    } else {
      res.end('successfully added');
    }
  }); 
  
})

app.get("/author", (req, res) => {
  res.render("author", {user: user});
})
app.get("/", function(req, res) {
  /*************Databasedan malumot o'qiymiz*************** */
  console.log('user entered /');
  db.collection("plans").find().toArray((err, data) => {
    if(err) {
      console.log(err);
      res.end("Something went wront")
    } else {
      // console.log(data);
      res.render("reja", {items: data}); // olgan datani ejs ichiga paste qilinadi
    }
  });
})

module.exports = app;