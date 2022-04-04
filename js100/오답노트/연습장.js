let prime = [];
let isPrime = true;
let val = 100;
let 골드바흐파티션 = [];

for (let i = 2; i < val; i++) {
    for(let j = 2; j < i; j++){
        if(i % j == 0){
            isPrime = false; //정수일때
        }
    }
    if(isPrime){ //소수일때
        prime.push(i);
    }
    isPrime = true;
}

for(let n of prime){
    if(prime.includes(val - n) && n <= val - n){
        골드바흐파티션.push([n, val - n]);
    }
}

let 차 = 골드바흐파티션.map(e => e[1]-e[0]);
let 작은값 = 골드바흐파티션[차.indexOf(Math.min.apply(null, 차))]
let 큰값 = 골드바흐파티션[차.indexOf(Math.max.apply(null, 차))]

console.log(골드바흐파티션) //모두출력
console.log(차)
console.log(작은값, 큰값)