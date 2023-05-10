// /******************CALLBACK FUNCTION**********************/

// console.log("Jack Ma maslahatlari");
// const list = [
//   "yaxshi talaba boling", //0-20
//   "togri boshliq tanlang va koproq hato qiling", //20-30
//   "ozingizga ishlashingizni boshlang", // 30-40
//   "siz kuchli bolgan narsalarni qiling", //40-50
//   "yoshlarga investitsiya qiling", // 50-60
//   "endi dam oling, foydasi yoq endi", //60
// ];

// function maslahatBering(a, callback) {
//   if(typeof a !== 'number') callback("insert a number", null); // callbackning 1-qismi errorga, ikkinchi qismi biz qaytarmoqchi bo'lgan dataga tegishli
//   else if(a <= 20) callback(null, list[0]);
//   else if(a > 20 && a <= 30) callback(null, list[1]);
//   else if(a > 30 && a <= 40) callback(null, list[2]);
//   else if(a > 40 && a <= 50) callback(null, list[3]);
//   else if(a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setTimeout(function(){
//       callback(null, list[5]);
//     }, 5000);
//   }
// }

// console.log('Passed here 0');
// //functionni chaqirganimizda callbackda parametr sifatida function ishga tushadi va parametrni ichida biz ish yuritamiz
// maslahatBering(65, (err, data) => {
//   if(err) console.log('ERROR: ', err);
//   else{
//     console.log('Javob: ', data);
//   }
// })

// console.log('Passed here 1');


/****************Asynchronous Functions *********************/
console.log("Jack Ma maslahatlari");
const list2 = [
  "yaxshi talaba boling", //0-20
  "togri boshliq tanlang va koproq hato qiling", //20-30
  "ozingizga ishlashingizni boshlang", // 30-40
  "siz kuchli bolgan narsalarni qiling", //40-50
  "yoshlarga investitsiya qiling", // 50-60
  "endi dam oling, foydasi yoq endi", //60
];

async function maslahatBering(a) {
  if(typeof a !== 'number') throw new Error("insert a number"); 
  else if(a <= 20) return list2[0];
  else if(a > 20 && a <= 30) return list2[1];
  else if(a > 30 && a <= 40) return list2[2];
  else if(a > 40 && a <= 50) return list2[3];
  else if(a > 50 && a <= 60) return list2[4];
  else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(list2[5]);
      }, 5000);
    });
  }
}

// async functionslarda CORE module functionlari ishlamaydi
// async functionlar sync functionlar ishga tushib bo'lganidan keyin ishga tushadi

/*****   call via then/catch    ****/ 
// console.log('passed here 0');
// maslahatBering(65)
//   .then(data => {
//     console.log("Javob:", data);
//   })
//   .catch( err => {
//     console.log("ERROR:", err);
//   })
//   console.log("passed here 1");

///////////////////////////////////

// console.log("passed here 0");
// maslahatBering(20)
// .then(data => {
//   maslahatBering(30)
//   .then(data => {
//     maslahatBering(40)
//     .then(data => {
//       console.log('Javob:', data);
//   })
//   .catch(err => {
//     console.log('ERROR:', err);
// });
//     console.log("passed here 1");
//     console.log('Javob:', data);
//   })
//   .catch(err => {
//   console.log('ERROR:', err);
// });
// console.log("passed here 1");
// console.log('Javob:', data);
// }).catch(err => {
//   console.log('ERROR:', err);
// });
// console.log("passed here 1");

/////////////////////////////////////

/************************ call via  async/await *****************************/
async function run() {
  let javob = await maslahatBering(65); // async functions await qismida javobni to'liq olmaguncha keyingi qator ishga tushmaydi
  console.log(javob);
  javob = await maslahatBering(31);
  console.log(javob);
  javob = await maslahatBering(41);
  console.log(javob);
}
run();




