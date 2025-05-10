// for (var i = 0; i <= 20; i += 2) {
//     console.log(i);
//   }




//   var number = parseInt(prompt("Введите число:"));
// var i = 1;
// while (i <= number) {
//   console.log(i);
//   i++;
// }





// var age = parseInt(prompt("Введите ваш возраст:"));
// if (age >= 18) {
//   alert("Вы совершеннолетний");
// } else {
//   alert("Вы несовершеннолетний");
// }





// var age = parseInt(prompt("Введите ваш возраст:"));
// alert(age >= 18 ? "Вы совершеннолетний" : "Вы несовершеннолетний");






// var num = parseInt(prompt("Введите число:"));
// if (num > 0) {
//   for (var i = 1; i <= num; i++) {
//     console.log(i);
//   }
// } else if (num < 0) {
//   alert("Число отрицательное");
// } else {
//   alert("Число равно нулю");
// }





// var str = prompt("Введите число в виде строки:");
// var num = parseInt(str);
// if (num % 2 === 0) {
//   alert("Число " + num + " четное");
// } else {
//   alert("Число " + num + " нечетное");
// }






// var number = parseInt(prompt("Введите число:"));
// if (number > 10) {
//   var sum = 0;
//   for (var i = 1; i <= number; i++) {
//     sum += i;
//   }
//   alert("Сумма чисел от 1 до " + number + " равна " + sum);
// } else {
//   alert("Число слишком маленькое");
// }






// var number = parseInt(prompt("Введите число:"));
// var divisors = [];
// for (var i = 1; i <= number; i++) {
//   if (number % i === 0) {
//     divisors.push(i);
//   }
// }
// alert("Делители числа " + number + ": " + divisors.join(", "));







// var number = parseInt(prompt("Введите число:"));
// var factorial = 1;
// var i = 1;
// while (i <= number) {
//   factorial *= i;
//   i++;
// }
// alert("Факториал числа " + number + " равен " + factorial);