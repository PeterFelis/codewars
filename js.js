function decToBin(dec) {
    let resultaat = ''
    let bin = Math.pow(2, 31)
    while (bin >= 0) {
        if (dec - bin >= 0) { resultaat += '1'; dec -= bin }
        else resultaat += '0'
        bin = Math.round(bin /= 2)
        console.log(bin)
    }
    return resultaat
}

function BinToDec(bin) {
    let getal = 128
    let totaal = 0
    for (let i = 0; i < 7; i++) {
        totaal += bin[i] * getal
        getal /= 2
    }
    return totaal
}

function ipToNum(ip) {
    let nip = ip.split('.')
    let binary = ''
    for (item of nip)
        binary += DecToBin(item)
    return parseInt(binary, 2)
}


function numToIp(num) {
    console.log(decToBin(num))
}

//numToIp("3232235777")
//console.log(ipToNum('192.168.1.1'))
console.log(decToBin("3232235777"))