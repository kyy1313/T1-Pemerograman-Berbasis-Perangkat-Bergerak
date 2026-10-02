// soal3.ts
let batas: number = 43 + 10; 

function cekPrima(n: number): boolean { 
    if (n < 2) {
        return false;
    }
    for (let i = 2; i * i <= n; i++) { 
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

let daftarPrima: string = "";
for (let angka = 1; angka <= batas; angka++) { 
    if (cekPrima(angka)) {
        if (daftarPrima != "") {
            daftarPrima = daftarPrima + ", ";
        }
        daftarPrima = daftarPrima + angka;
    }
}
console.log("Bilangan prima 1 sampai " + batas + ":");
console.log(daftarPrima);