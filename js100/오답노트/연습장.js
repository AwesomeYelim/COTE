function mathBrackets(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(" || arr[i] === "[" || arr[i] === "{") {
      count++;
    }
    if (arr[i] === ")" || arr[i] === "]" || arr[i] === "}") {
      count--;
    }
  }

  if (count !== 0) {
    return false;
  }

  let bracket = [];

  for (let i in arr) {
    if (arr[i] === "(") {
      bracket.push("(");
    }
    if (arr[i] === ")") {
      if (bracket.length === 0) {
        //')' 부터 시작할수 없기 때문에 return false를 반환
        return false;
      }
      bracket.pop();
    }
    if (arr[i] === "[") {
      bracket.push("[");
    }
    if (arr[i] === "]") {
      if (bracket.length === 0) {
        return false;
      }
      bracket.pop();
    }
    if (arr[i] === "{") {
      bracket.push("{");
    }
    if (arr[i] === "}") {
      if (bracket.length === 0) {
        return false;
      }
      bracket.pop();
    }
    return true;
  }
}
// const num = prompt().split("")
const num = "(())}{}".split("");

if (mathBrackets(num) == true) {
  console.log("YES");
} else {
  console.log("NO");
}