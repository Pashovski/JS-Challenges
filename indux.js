// const dessert = { type: 'pie'}
// dessert.type = 'pudding';
//  const seconds = dessert;
//  seconds.type = 'fruit'

//  console.log(typeof "blueberry");

//  sum(10,20)
//  diff(10,20)
//  function sum(x,y) {
//      return x+y
//  }
//  let diff = function(x,y) {
//      return x - y
//  }

// class X {
//     get Y() { return 42; }
// }

// var x = newX();
// console.log(x.Y);

// var v = 1

// var f1 = function () {
//     console.log(v);
// }

// var f2 = function () {
//     var v = 2
//     f1()
// }

// f2()

// let rainForestAcres = 10;
// let animals = 0;

// while(rainForestAcres < 13 || animals <=2){
//     rainForestAcres++
//     animals += 2
// }
// console.log(animals);

var sound = 'grunt'
var bear = { sound: 'roar' }

function roar() {
  console.log(this.sound)
  return bear.sound
}

roar.apply(bear)

// let vowels =
// for(var i = 0; i < vowels.length; i++){
//     console.log(vowels[i]);
// }

// for (var i = 0; i < 5; i++) {
//     console.log(i)
// }

// let roadTypes = ['street', 'road', 'avenue', 'circle']

// console.log(roadTypes[2])

// console.log(typeof(42))

// var v = 1;

// var f1 = function () {
//     console.log(v);
// }

// var f2 = function() {
//     var v = 2;
//     f1();
// }

// f2()

// const numbers = [1,2,3,4,5];

// const {one, two, three, four, five} = {numbers}

// var a = ['dog', 'cat', 'hen'];
// a[100] = 'fox';
// console.log(a.length);

// var pokedex = ['Snorlax', 'Jigglypuff', "Charmander", "Squirtle"];
// pokedex.pop();
// console.log(pokedex.pop())

// var thing;
// let func = (str = 'no arg') => {
//     console.log(str);
// }
// func(thing);
// func(null);

// const x = 6 % 2;
// const y = x ? 'One': 'Two';
// console.log(y);

// let animals = ["jaguar","eagle"];
// animals.pop()
// console.log(animals.pop());

// let a = 5;

// console.log(a++);
// console.log(++a);

// ++lion;

// const obj = {
//     a: 1,
//     b: 2,
//     c: 3,
// };

// const obj2 = {
//     ...obj,
//     a: 0,
// };

// console.log(obj.a, obj.b);

// const myFunc = () => {
//     const a = 2;
//     return () => console.log("a is " + a);
// }

// const a = 1;

// const test = myFunc()
// test()
