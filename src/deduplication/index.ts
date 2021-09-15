const v = [1, 2, 3, 4, 5, 6, 9, 9, 5, 2, 4, 7];
const v2 = ['a', 'b', 'b', 'd', 'c', 'a', 'e', 'e', 'f'];

// 重複排除
console.log(Array.from(new Set(v)));
console.log([...new Set(v2)]);
