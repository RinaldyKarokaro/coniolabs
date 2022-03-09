//Cara pertama
module.exports = {
    horse :function(a, b){
        let result = 0
        for(i = 0;i<a ;){
            result += 1
            i += b
            if(i > a){
            console.log(`Kandang ke-${i/b}: ${a%b} kuda`)
            }else{
                console.log(`Kandang ke-${i/b}: ${b} kuda`)
            }
        }
        console.log(`Total ${result} kandang`)
    }
}

//Cara kedua
function horse2(a,b){
    let result = a/ b
    if(a % b != 0){
        result += 1
    }
    console.log(Math.floor(result));
}

//Cara ketiga
function horse3(a,b){
    console.log(Math.round(a/b))
}

