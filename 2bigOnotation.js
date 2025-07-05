
// function sufOfAll(n){
//     let total = 0;
//     for(let i = 0; i <= n; i++){
//         total += i;
//     }
//     return total
// }


function sufOfAll(n){
    return n*(n+1)/2;
}

// let a = sufOfAll(10011231110);
// console.log(a)

let time1 = performance.now();
console.log(sufOfAll(4434344344));
let time2 = performance.now();
console.log(time1)
console.log(time2)
console.log(`your code time ${(time1 - time2) / 1000}`)


function multipleArray(n) {
    for(let i = 0 ; i <= n; i++){
        for (let j = 0; j <= n; j++) {
            console.log(i,j)
        }
    }
}
multipleArray(2)