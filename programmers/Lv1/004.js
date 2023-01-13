// Lv1. 숫자 문자열과 영단어

// 내가푼답
const num = "23four5six7";

function solution(answer) {
  const obj = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
  };

  for (let key in obj) {
    if (answer.includes(obj[key]) && answer[0] !== 0 && answer[0] !== "z") {
      answer = answer.replace(obj[key], key);
    }
  }
  answer = Number(answer);
  return answer;
}

console.log(solution(num));

//다른사람 풀이

const str = "23four5six7";

function solution(s) {
  let num = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine"
  ];
  let answer = s;

  for(let i = 0; i < num.length; i++) {
    let arr = answer.split(num[i]);
    answer = arr.join(i);
  }

  return Number(answer);
}

console.log(solution(str))