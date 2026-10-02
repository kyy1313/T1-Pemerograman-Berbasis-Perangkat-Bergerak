"use strict";
// soal3.ts
let batas = 43 + 10; // <1>
function cekPrima(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i * i <= n; i++) { // <3>
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}
let daftarPrima = "";
for (let angka = 1; angka <= batas; angka++) { // <4>
    if (cekPrima(angka)) {
        if (daftarPrima != "") {
            daftarPrima = daftarPrima + ", ";
        }
        daftarPrima = daftarPrima + angka;
    }
}
console.log("Bilangan prima 1 sampai " + batas + ":");
console.log(daftarPrima);
