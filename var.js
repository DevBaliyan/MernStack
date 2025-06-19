// var a = "4";
// let b = 45; 
// const c = 7;
// var d;





// // P1
// b = a + b;
// console.log(b);

// // P2
// if (a%2==0){
//     console.log("Even");
// }
// else if(a%2==1){
//     console.log("Odd");
// }
// else{
//     console.log("Incorrect Data Type");
// }

// // P3
// for(let i=1; i<=10; i++){
//     console.log(i);
// }

// // P4
// if (a>18){
//     console.log("Eligible to Vote");
// }

// P5
// let objt = {'a': 45, b: '50', 'c': '60'}
// console.log(objt['a'], objt.b)
// // console.log(a, b, c, d);

// // P6
// class App{
//     constructor(name, age){
//         this.name = name; this.age = age;
//     }
//     print(){
//         console.log(this.name, this.age);
//     }
// }

// x = new App("Dev", 21);
// x.print();

// console.log(typeof(a), a instanceof String);


// P8
// let random = 'Hello  jgh', out = '';
// let spaceStarted = false;
// for(let i in random){
//     if(random[i]===' ' && !spaceStarted){
//         spaceStarted = true;
//         out += ' ';
//     }
//     else if(spaceStarted && random[i] !== ' '){
//         continue;
//     }
//     else{
//         spaceStarted = false;
//     }
//     if(!spaceStarted){
//         out += random[i];
//     }
// }

// console.log(out);


// P9
// const str = "The    quick                  brown                                                          fox";
// const regex = /\s+/g;
// // console.log(regex.test(str));
// console.log(str.replaceAll(regex, " "));
// console.log(str.replaceAll('  ', ' '));

// P10
// let sec = 433431;
// const days = Math.floor(sec / 86400); sec %= 86400;
// const hours = Math.floor(sec / 3600); sec %= 3600;
// const mins = Math.floor(sec / 60); sec %= 60;

// console.log(days, hours, mins, sec)


// // P11
// let str1 = "Hello There is something to be told"
// const strArray = str1.split(' ');
// let high = strArray[0].length;
// let word = strArray[0];

// for (i in strArray){
//     const curr = strArray[i].length;
//     if(curr > high){
//         high = curr;
//         word = strArray[i]
//     }
// }
// console.log(word, high);

// P12
// const randomNumber = Math.floor(Math.random()*101);
// // console.log(randomNumber);

// let userInput = prompt("Enter Your Guess (0->100) ");
// console.log(userInput);

// for(let i=0; i++; i<7){
//     let input = Number(prompt("Enter Your Guess"));
//     if (input == randomNumber){
//         console.log("Correct Guess");
//         break;
//     }
//     else if(input > randomNumber){
//         console.log("Number is lesser than your current Guess!");
//     }
//     else{
//         console.log("Number is greater than your current Guess!");
//     }
// }


// // P13
// let arr = [34, 43, 54, 54, 64, 65];
// console.log(arr.push(70));

// arr.forEach(element => {
//     console.log(element)
// });

// function f1(c1, c2){
//     console.log("H1");
//     c1();
//     c2();
// }

// function f2(){
//     console.log("H2");
// }

// function f3(){
//     console.log("H3");
// }

// f1(f3, f2)






// DAY 3
// P1
// let a=45;
// let y=a;
// y=10;
// console.log(a, y);

// P2
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = arr1;
// arr2.push(6);

// console.log(arr1, arr2);


// // P3
// let arr1 = [1, 2, 3, 4, 5];
// arr2 = [...arr1];

// arr1.push(6)
// arr2.push(7)
// console.log(arr1, arr2);


// P4
// console.dir(window)


// P5
