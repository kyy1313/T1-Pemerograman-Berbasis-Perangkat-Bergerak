"use strict";
//soal 2
let awal = 43;
let beda = 9 + 1;
let jumlah = 10;
let suku = awal;
let hasil = "";
for (let i = 1; i <= jumlah; i++) {
    if (i > 1) {
        hasil = hasil + " ";
    }
    hasil = hasil + suku;
    suku = suku + beda;
}
console.log(hasil);
