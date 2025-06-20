const a1 = [1, 2, 3];
const a2 = [3, 4, 5];

// const a3 = a1.concat(a2, [7, 8, 9], 'Ismael');

const a3 = [...a1, 'Ismael', ...a2, ...[7, 8, 9]];
console.log(a3);