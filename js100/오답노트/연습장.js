const 전체블록 = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"];
let 규칙 = "ABD";

function solution(전체블록, 규칙) {
  let answer = [];
  for (let 부분블록 of 전체블록) {
    answer.push(블록순서체크(부분블록, 규칙)); //콜백함수를 넣어줌
  }
  return answer;
}
function 블록순서체크(부분블록, 규칙) {
  let 임시변수 = 규칙.indexOf(규칙[0]);
  for (let 문자 of 부분블록) {
    console.log(문자)
    if (규칙.includes(문자)) {
      if (임시변수 > 규칙.indexOf(문자)) {
        return "불가능";
      }
      임시변수 = 규칙.indexOf(문자);
    }
  }
  return "가능";
}

console.log(solution(전체블록, 규칙));