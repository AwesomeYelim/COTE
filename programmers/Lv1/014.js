// 문제 11. 삼총사

let three = [-2, 3, 0, 2, -5];

function solution(number) {
    var answer = 0;
    var count = 0
    for(let i = 0; i < 3; i++) {
        number = number.splice(0, i, 1);
        answer += three[i]
        if(answer === 0){ 
            count += 1  
            return count;
        }
    }
    solution(number)
}

solution(three)