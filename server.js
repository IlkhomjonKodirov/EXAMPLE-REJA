
/************************************Express Framework: Web Server Quramiz************************************ */
console.log('Web serverni boshlash');
const express = require("express");
const app = express(); // expressning app objectini hosil qiladi
const http = require('http');

// 1 -bosqich: Kirish kodlari. Expressga kirib kelayotgan ma'lumotga bog'liq bo'lgan kodlar yoziladi

app.use(express.static("public")); // Har qanday brauzerdan kirib kelayotgan zaproslar uchun public folderi ochiq degan ma'noni anglatadi(Faqat public folderini ko'ra oladi)
app.use(express.json());// Kirib kelayotgan json formatdagi datani object holatga o'girib beradi.
app.use(express.urlencoded({extended: true})); // Bu kod - html formdan biror narsani post qilsak bizning express serverimiz qabul qilib olishi uchun ishlatiladi

// 2-bosqich: Sessionga bog'liq kodlar

// 3 - bosqich: viewsga bog'liq kodlar. Beckendda (view) frontend yasaymiz ejs yordamida

app.set("views", "views");
app.set("view engine", "ejs");

// 4 - bosqich: Routingga bog'liq kodlar

//get - databasedan ma'lumotni olish(o'qish) uchun ishlatiladi
app.get("/hello", function(req, res){
  res.end("<h1>HELLO WORLD!</h1>")
});
app.get("/gift", function(req, res){
  res.end("<h1>Siz sovg'alar bo'limidasiz</h1>")
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
  console.log(`The server is running succesfully on port: ${PORT}`);
});

