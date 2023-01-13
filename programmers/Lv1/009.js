// Lv1. 멀쩡한 사각형


function max(w, h){

  const m = w % h

  if(m === 0){
    return h
  }
  return max(h, m)
}

function solution(w, h) {
  const m = w + h - max(w,h)

  return w * h - m;

}

console.log(solution(8, 12))
