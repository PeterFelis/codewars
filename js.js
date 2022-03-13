
function ipToNum(ip) {
    let nip = ip.split('.')
    console.log(nip)
    let binary = ''
    let hulp
    for (let item of nip) {
        hulp = '00000000' + Number(item).toString(2)
        hulp = hulp.substring(hulp.length - 8)
        binary += hulp
    }
    console.log(binary)
    return parseInt(binary, 2)
}


function numToIp(num) {
    let hulp = String(BigInt(num.toString(2)))
    let bin = []
    let uitvoer = ''
    for (let i = 0; i < 4; i++) {
        bin.push(hulp.substring(i * 8, i * 8 + 8))
        uitvoer += parseInt([bin[i]], 2) + '.'
    }
    return uitvoer.substring(0, uitvoer.length - 1)


}

console.log(numToIp(3232235777))
console.log(ipToNum('192.168.1.1'))


console.log(numToIp(1977390076))
console.log(ipToNum('10.0.0.0'))