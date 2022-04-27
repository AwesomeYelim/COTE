// 1. 문자열 압축

// let str = "aabbaccc";
// let str = "ababcdcdababcdcd";
// let str = "abcabcdede";
// let str = 'abcabcabcabcdededededede'
// let str = 'xababcdcdababcdcd'


// 시도한답
// function sol(s) {
//   let arr = [];
//   let arr2 = [];
//   let arr3 = [];
//   let arr4 = [];
//   let arr5 = [];
//   let count = 1;

//   for (let i = 1; i < s.length + 1; i++) {
//     for (let j = 0; j < i; j++) {
//       let slice = s.slice(j, s.length + 1 - i);
//       if (slice.length !== 0 && slice.length !== s.length - 1) {
//         if (!arr.includes(slice) && slice[0] == s[0]) {
//           arr.push(slice);
//         }
//       }
//     }
//   }
//   console.log(arr);

//   for (let i of arr) {
//     let 나머지 = s.replace(i, "");

//     while (나머지.includes(i)) {
//       나머지 = 나머지.replace(i, "");
//       count += 1;
//       arr2.push(나머지);
//       arr4.push(i);
//     }

//     // while(!나머지.includes(i)){

//     // }
//   }
//   for (let i of arr2) {
//     i = i.length;
//     arr3.push(i);
//   }
//   for (let i of arr4) {
//     i = i.length;
//     arr5.push(i);
//   }
//   return Math.min.apply(null, arr3) + Math.max.apply(null, arr5);
// }

// console.log(sol(str));


function solution(s) {
    let min_len = s.length;
    
    for (let i = 1; i <= parseInt(s.length / 2); i++) {
        let prev = s.substr(0, i);
        let count = 1;
        let str = '';
        
        for (let k = i; k < s.length; k += i) {
            const cur = s.substr(k, i);
            
            if (prev === cur) count++;
            else {
                str += (count > 1 ? String(count) : '') + prev;
                count = 1;
                prev = cur;
            }
        }
        str += (count > 1 ? String(count) : '') + prev;
        
        min_len = Math.min(min_len, str.length)
    }
    
    return min_len;
}

// console.log(sol(str));