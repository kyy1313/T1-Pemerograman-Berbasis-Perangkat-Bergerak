//soal 2

let awal : number = 43 ;
let beda : number = 9 + 1 ;
let jumlah : number = 10 ;

let suku : number = awal ;
let hasil : string = "" ;

for (let i = 1 ; i <= jumlah ; i++) {
    if (i > 1) {
        hasil = hasil + " " ;
    }

    hasil = hasil + suku ;
    suku = suku + beda ;
}

console.log(hasil) ;
