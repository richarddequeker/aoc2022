import fs from 'fs';
import path from 'path';

console.log('DAY 1');

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), { encoding: 'utf8' });

const caloriesByElf = input
    .split('\r\n\r\n')
    .map((line) => line.split('\r\n').map((n) => parseInt(n, 10)))
    .map((line) => line.reduce((acc, curr) => acc + curr));

console.log('RESULTAT PART 1 => ', Math.max(...caloriesByElf));

caloriesByElf.sort((a, b) => a - b).reverse();
const [first, second, third] = caloriesByElf;

console.log('RESULTAT PART 2 => ', first + second + third);