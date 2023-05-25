/*Task-E: shunday function tuzing unga faqat bitta musbat integer argument qilib berilsin, va u ushbu argumentni tub son bolsa true aksincha false return qilsin.

Masalan: tubSonmi(5) return true, tubSonmi(10) return false. Tub sonlar faqat ozi va 1soniga toliq bolinadigan sonlar. */

function tubSonmi(num) {
  if(num === 1){
    return false;
  }
  else if(num === 2) {
    return true;
  }
  else {
    for(let i = 2; i < num; i++) {
      if(num % i === 0) {
        return false;
      }
    }
    return true;
  }
}
console.log(tubSonmi(12));
console.log(tubSonmi(17));


















/* D-Task: Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, 
biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.

  masalan: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! 
shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud! */

// const moment = require('moment');
// const time = moment().format('HH:mm')

// class Shop {
//   constructor(non, lagmon, cola) {
//     this.non = non;
//     this.lagmon = lagmon;
//     this.cola = cola;
//   }

//   sotish(productName, num) {
//     if(productName == 'non')
//       this.non -= num;
//     else if( productName == 'lagmon')
//       this.lagmon -= num;
//     else this.cola -= num;
//   }

//   qabul(productName, num) {
//     if(productName == 'non')
//       this.non += num;
//     else if(productName == 'lagmon')
//       this.lagmon += num;
//     else this.cola += num;
//   }

//   qoldiq(){
//     console.log(`Hozir ${time}da ${this.non}ta non, ${this.lagmon}ta lagmon, ${this.cola}ta cola mavjud!`);
//   }
// }

// const shop = new Shop(4, 5, 8);
// shop.qoldiq();
// shop.sotish('non', 2);
// shop.qabul('lagmon', 1);
// shop.qabul('cola', 1);
// shop.qoldiq();



// /******************CALLBACK FUNCTION***************************************/

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


/****************Asynchronous Functions *********************************************/
// console.log("Jack Ma maslahatlari");
// const list2 = [
//   "yaxshi talaba boling", //0-20
//   "togri boshliq tanlang va koproq hato qiling", //20-30
//   "ozingizga ishlashingizni boshlang", // 30-40
//   "siz kuchli bolgan narsalarni qiling", //40-50
//   "yoshlarga investitsiya qiling", // 50-60
//   "endi dam oling, foydasi yoq endi", //60
// ];

// async function maslahatBering(a) {
//   if(typeof a !== 'number') throw new Error("insert a number"); 
//   else if(a <= 20) return list2[0];
//   else if(a > 20 && a <= 30) return list2[1];
//   else if(a > 30 && a <= 40) return list2[2];
//   else if(a > 40 && a <= 50) return list2[3];
//   else if(a > 50 && a <= 60) return list2[4];
//   else {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(list2[5]);
//       }, 5000);
//     });
//   }
// }

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

/////////////////////////////////////////////////////////////////////////////

/************************ call via  async/await *****************************/
// async function run() {
//   let javob = await maslahatBering(65); // async functions await qismida javobni to'liq olmaguncha keyingi qator ishga tushmaydi
//   console.log(javob);
//   javob = await maslahatBering(31);
//   console.log(javob);
//   javob = await maslahatBering(41);
//   console.log(javob);
// }
// run();

//************************************************************************************ */
//C-Task: Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin.  
//Masalan: checkLetters("carselon", "arlocesn") return qilish kerak true, checkLetters("dog", "game") return false

// function checkLetters(a, b) {
//   let c = a.split('').sort().join('');
//   let d = b.split('').sort().join('');

//   if(c.length === d.length && c === d){
//     return true;
//   }
//   else return false;
// };

// console.log(checkLetters("carselon", "arlocesn"));
// console.log(checkLetters("apelsin", "shaftoli"));
// console.log(checkLetters("dog", "game"));

//************************************************************************************* */

/*TASK-B: shunday function tuzing, u integerlardan iborat arrayni argument 
sifatida qabul qilib, faqat positive positive qiymatlarni     olib return qilsin*/

// const a = [-11, 23, 0, -43, 67, -3, -342, 45, 7];
// const b = [ 15, -2, 0, 8, -30];

// const getPositive = arr => { return arr.filter(ele => ele>0)}

// console.log(getPositive(a));
// console.log(getPositive(b));



//************************************************************************************* */
/* 
TASK-A: Shunday 2 parametrli function tuzing,
hamda birinchi parametrdagi letterni ikkinchi parametrdagi
so'zdan qatnashga sonini return qilishi kerak.
MASALAN countLetter("e", "engineer") 3ni return qiladi.
*/

// const countLetter = (letter, word) => {
//   const word_letters = word.split('');
//   const same_letters= word_letters.filter((ele) => {
//     return ele === letter
//   })
//   const num_letter = same_letters.length;
//   return num_letter;
// }
// const result = countLetter("r", "programming");
// console.log(result);



