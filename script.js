// function tambah (a, b) {

//     return a + b;
// }

// var a = parseInt(prompt("masukan nilai 1 :"));
// var b = parseInt(prompt("masukan nilai 2 :"));

// var hasil = tambah(a, b);

// console.log(hasil);

// var hasil = kali (tambah(5, 5), tambah(3, 2));
// console.log(hasil);

// function tambah() {
//     var hasil = 0;
//     for (i = 0; i < arguments.lenght; i++) {
//         hasil += arguments[i];
//     }
//     return hasil;
// }

// var coba = tambah (3, 5, 10, 5, 80);
// console.log(coba);

// function kali (a, b) {
//     console.log(a);
//     //nilai  inputan pertama
//     console.log(b);
//      //nilai  inputan kedua
//      return a*b 
// }
// nilai1 = parseInt(prompt("masukan nilai 1"));
// nilai2 = parseInt(prompt("masukan nilai 2"));

// var coba = kali (nilai1, nilai2);
// console.log(coba);  


// var tampilPesan = function (nama){
//     alert( "halo " + (nama));
// };

// tampilPesan("ibra");


function  tambah (a,b){
    console.log("ANGKA 1 : " + a);
    console.log("ANGKA 2 : " + b);
    return a + b;
}
function  kurang (a,b){
    console.log("ANGKA 1 : " + a);
    console.log("ANGKA 2 : " + b);
    return a - b;
    
}
function  bagi (a,b){
    console.log("ANGKA 1 : " + a);
    console.log("ANGKA 2 : " + b);
    return a / b;
}
function  kali (a,b){
    console.log("ANGKA 1 : " + a);
    console.log("ANGKA 2 : " + b);
    return a * b;
}

let operator = prompt("masukan operator");
var a= parseInt(prompt(`masukan nilai 1:`));
var b= parseInt(prompt(`masukan nilai 2:`));

if(operator == '+'){
    var hasil= tambah(a,b);
    console.log(hasil);
}
if(operator == '-'){
    var hasil= kurang(a,b);
    console.log(hasil);
}
if(operator == '/'){
    var hasil= bagi(a,b);
    console.log(hasil);
}
if(operator == '*'){
    var hasil= kali(a,b);
    console.log(hasil);
}