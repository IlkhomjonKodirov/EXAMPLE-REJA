//C-Task: Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin.  
//Masalan: checkLetters("carselon", "arlocesn") return qilish kerak true, checkLetters("dog", "game") return false
function checkLetters(a, b) {
  let c = a.split('').sort().join('');
  let d = b.split('').sort().join('');

  if(c === d){
    return true;
  }
  else return false;
};

console.log(checkLetters("carselon", "arlocesn"));
console.log(checkLetters("dog", "game"));

/****************************************************************************************************** **********************/

// //TASK-B: shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib return qilsin
// const a = [-11, 23, 0, -43, 67, -3, -342, 45, 7];
// const b = [ 15, -2, 0, 8, -30];

// const getPositive = arr => { return arr.filter(ele => ele>0)}

// console.log(getPositive(a)); // [ 23, 67, 45, 7 ]
// console.log(getPositive(b)); // [ 15, 8 ]

/**************************************************************************************************** */

// // TASK-A: Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak.

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