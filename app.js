let a1 = [12, 45, 7, 32];
let max = Math.max(...a);
let min = Math.min(...a);

let a = [9, 3, 5, 1];
a.sort((x, y) => x - y); // Ascending
console.log(a);

a.sort((x, y) => y - x); // Descending
console.log(a);