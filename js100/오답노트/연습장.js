let score ='97 86 75 66 55 97 85 97 97 95'.split(' ')
let rank = Array.from(new Set(score)).sort((a, b) => b - a).slice(0, 3)
console.log(rank)
let count = score.filter(a => rank.includes(a)).length
console.log(count)


