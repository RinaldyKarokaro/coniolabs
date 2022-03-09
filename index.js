const readline = require('readline-sync')
const task1 = require('./task1')
const task2 = require('./task2')
 
function menu(){
    let pilihan = Number(readline.question('\n1.Task 1\n2.Task 2\n3.Exit\n>'));
    switch(pilihan){
        case 1 :
            let kalimat = String(readline.question('Masukkan kalimat : '))
            task1.count(kalimat);
            return menu()
        case 2 :
            let N = Number(readline.question('Masukkan Nilai N :'))
            if(N<= 0 || N >= 1000000000){
                console.log('Nilai N harus di antar 1 sampai 1.000.000.000')
                return menu()
            }
            let M = Number(readline.question('Masukkan Nilai M :'))
            if(M<= 0 || M >= 1000000000){
                console.log('Nilai M harus di antar 1 sampai 1.000.000.000')
                return menu()
            }
            task2.horse(N,M)
            return menu()
        case 3:
            break  
    }
}

menu()
