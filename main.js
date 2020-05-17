console.log("Hello World");

var name;
name = "Ahmet";
console.log(name);

var name = "ahmet";
var Name = "mehmet";
var first_name = "Ayşe";

console.log(5 + 2);
console.log(5 ** 2);
console.log(5 % 2);
console.log(5 / 2);
console.log("5" + 2);
console.log("5" + 2 + "3");
console.log(3 + 5 + 6 + "2" + 2 + 5 + 4 + 3);

var x = 10;
x += 3;     //x=x+3
console.log(x);
x -= 4;
console.log(x);
x %= 2;
console.log(x);
x *= 2;
console.log(x);
x /= 3;
console.log(x);
console.log(x.toFixed(2));

// primitive                                               complex
// ---------                                               ---------

// String      (karakter)                                  Object      Object
// Number      (sayı değerleri)                                        Array
// Boolean    (true-false)                                             null
// undefined   (tanımlanan değişken ama değersiz)          function


console.log("5" == 5 )
console.log("5" === 5 )

// == value değerini kontrol eder true olur
// === value değeri + data type kontor eder false olur
console.log(undefined == null);
console.log(undefined === null);

//! değildir       != eşit değer değildir      !== data type + değer eşit değildir

console.log( "3" != 3);
console.log( "3" !== 3);

console.log(5 > 3);

var x = 5;
console.log(typeof x);
var x = "5";
console.log(typeof x);

var x = [1, 2, "a"];
console.log(typeof x);
var x = {};
console.log(typeof x);
var personel = {adi : "hasan", soyad : "yıldız", yas: 43};
console.log(typeof x);

var x = [55, "hasan", {},23, [1,2,33]];
console.log(x[4]);
console.log(x.length);
console.log(x [x.length - 1] );

console.log(x[4][1]);
console.log(x [x.length - 1] [1]);



// loop type
// ----------

// for
// for/ın  =>object
// for/of  =>arrays
// whıle
// do/while

var x = ["hasan", "ahmet", "veli", 3, [5, 12, 55]];

// console.log(x[0]);
// console.log(x[1]);
// console.log(x[2]);

// for (var i = 0; i < x.length; i++) {
//     console.log(x[i]);
// }

// var i = 0;
// var elemanSayisi = x.length
// for (var i; i < elemanSayisi; i++) {
//     console.log(x[i]);
// }

// var i = 0;
// var elemanSayisi = x.length
// for (var i; i < elemanSayisi;) {
//     console.log(x[i]);
//     i++
// }

var i;
for (i=0; i<x.length; i++){
    console.log(x[i])
}

var num1 = window.prompt("lütfen birinci sayiyi giriniz");
console.log(num1);


var array = [];

var num1 = window.prompt("lütfen birinci sayiyi giriniz");
array.push(parseInt(num1));
var num2 = window.prompt("lütfen ikinci sayiyi giriniz");
array.push(parseInt (num2));

if (array[0] > array[1]) {
    console.log(`girdiğini iki rakamdan büyük olan : ${array[0]}`);
} else if (array[1] > array[0]) {
    console.log("girdiğini iki rakamdan büyük olan" + array[1]);
}else {
    console.log("girdiğini iki rakamdan biribirine eşittir");}
console.log(array);

for ( var elem = 0 ; elem <= 15; elem++ ) {    
    if ( elem === 0 ) {
        console.log( `${elem} cift sayidir.`);
    } else if ( elem % 2 === 0 ) {
        console.log( `${elem} cift sayidir.`);
    } else  {
        console.log( `${elem} tek sayidir.`);
    }
}

for ( var elem = 0 ; elem <= 15; elem++ ) {   
    if ( elem === 0 ) {
        console.log( `${elem} cift sayidir.`);
    } else if ( elem % 2 !== 0 ) {
        console.log( `${elem} tek sayidir.`);
    } else  {
        console.log( `${elem} çift sayidir.`);
    }
}

for ( var elem = 0 ; elem <= 15; elem++ ) {    
    if ( elem % 2 !== 0 ) {
        console.log( `${elem} tek sayidir.`);
    } else if ( elem % 2 === 0 ) {
        console.log( `${elem} çift sayidir.`);
    } else  {
        console.log( `${elem} çift sayidir.`);
    }
}

for (var t = 1; t < 101; t++) {

    if (t % 3 === 0 && t % 5 === 0) {
        console.log(`${t} FizzBuzz`);
    } else if (t % 3 === 0) {
        console.log(`${t} Fizz`);
    } else if (t % 5 === 0) {
        console.log(`${t} Buzz`);
    } else {
        console.log(t);
    }
}

var y = [];

for (var t = 1; t < 101; t++) {

    if (t % 3 === 0 && t % 5 === 0 ) {
        console.log(`${t} FizzBuzz`);
        y.push([t, 'FizzBuzz'])

    } else if (t % 3 === 0) {
        console.log(`${t} Fizz`);
        y.push([t, 'Fizz'])

    } else if (t % 5 === 0) {
        console.log(`${t} Buzz`);
        y.push([t, 'Buzz'])

    } else {
        console.log(t);
    }
}
console.log[y]