function random (min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);
let i = 0;

while (rand !== 10){
    rand = random(min, max);
    i++
    console.log(`${rand}, ${i} Vezes`)
}

console.log('#############################')
i = 0

do {
    rand = random(min, max);
    
    i++
    console.log(`${rand}, ${i} Vezes`)
} while(rand !== 10);