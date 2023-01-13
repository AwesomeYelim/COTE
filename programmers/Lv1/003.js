// Lv1. 신규 아이디 추천

// 내가푼답
function solution(new_id) {

    let lv1 = new_id.toLowerCase();
    let lv2 = lv1.replace(/[^\w-._]+/g,'');
    let lv3= lv2.replace(/\.{2,}/g, '.');
    let lv4 = lv3.replace(/^\.|\.$/g, '');
    let lv5 = lv4.replace(/^$/, 'a');
    let lv6 = lv5.slice(0, 15).replace(/\.$/, '');
    let lv7 = lv6.length > 2 ? lv6 : lv6 + lv6.charAt(lv6.length - 1).repeat(3 - lv6.length)

    return lv7;
}

let new_id = 'z-+.^.'
console.log(solution(new_id))

// 1. 다른사람풀이

const solution = (new_id) => {
    const id = new_id
        .toLowerCase()
        .replace(/[^\w\d-_.]/g, '')
        .replace(/\.{2,}/g, '.')
        .replace(/^\.|\.$/g, '')
        .padEnd(1, 'a')
        .slice(0, 15)
        .replace(/^\.|\.$/g, '')
    return id.padEnd(3, id[id.length-1])
}

// 2. 다른사람 풀이 (정규식 없이 품)

function solution(nid) {
  var ans = "";
  for (let i = 0; i < nid.length; i++) {
    let c = nid[i].toLowerCase();
    if ("0123456789abcdefghijklmnopqrstuvwxyz.-_".indexOf(c) === -1) continue;
    if (c === "." && ans[ans.length - 1] === "." && nid[i - 1]) continue;
    ans += c;
  }
  if (ans[0] === ".") ans = ans.slice(1);
  ans = ans.slice(0, 15);
  if (ans[ans.length - 1] === ".") ans = ans.slice(0, ans.length - 1);
  if (!ans) ans = "a";
  while (ans.length < 3) ans += ans[ans.length - 1];
  return ans;
}
