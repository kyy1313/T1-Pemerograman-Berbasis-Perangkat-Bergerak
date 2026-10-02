// Soal 1 
let tinggi : number = 3 ;

for (let baris = 1 ; baris <= tinggi ; baris++) {
    let teks : string = "" ;
    for (let angka = 1 ; angka <= baris ; angka++) {
        if (angka > 1) {
            teks = teks + " " ;
        }
        teks = teks + angka ;
    } console.log(teks) ;
}
