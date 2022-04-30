function sol(n, l) {
  for(let i = 0; i < l.length/2; i++){
    l[i] = l[i] - 1
    console.log(l[i])

  }
  // for(let i = n; i < l.length; i++){
    
  //   console.log(l[i])

  // }

  
}

const 배달원 = 3;
const 배달시간 = [1, 2, 1, 3, 3, 3];
// 0,1,2 / 3,4,5
console.log(sol(배달원, 배달시간));
