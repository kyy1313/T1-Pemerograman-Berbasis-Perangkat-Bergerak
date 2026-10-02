"use strict";
// Soal 1 
let tinggi = 3;
for (let baris = 1; baris <= tinggi; baris++) {
    let teks = "";
    for (let angka = 1; angka <= baris; angka++) {
        if (angka > 1) {
            teks = teks + " ";
        }
        teks = teks + angka;
    }
    console.log(teks);
}
