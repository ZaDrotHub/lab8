let arr = [];

const a = prompt('Кількість рядків = ');
const b = prompt('Кількість стовпців = ');

for (let i = 0; i < a; i++) {
    arr[i] = [];
    for (let j = 0; j < b; j++) {
    arr[i][j] = Math.floor(Math.random() * 100) + 10;
}
}

let maxSum = 0;
let maxRowIndex = 0;
for (let i = 0; i < a; i++) {
    let row = "";
    let rowSum = 0;
    for (let j = 0; j < b; j++) {
    row += arr[i][j] + "\t";
    rowSum += Number(arr[i][j]);
  }
  if (rowSum > maxSum) {
    maxSum = rowSum;
    maxRowIndex = i;
  }
  console.log(row + `Сума елементів рядка ${i}: ${rowSum}`);
}

console.log(`Номер рядка з максимальною сумою елементів: ${maxRowIndex}`);

let maxSumb = 0;
let maxColumnIndex = 0;
for (let j = 0; j < b; j++) {
    let columnSum = 0;
    for (let i = 0; i < a; i++) {
        columnSum += Number(arr[i][j]);
  }
  if (columnSum > maxSumb) {
    maxSumb = columnSum;
    maxColumnIndex = j;
  }
  console.log(`Сума елементів стовпця ${j}: ${columnSum}`);
}
console.log(`Номер стовпця з максимальною сумою елементів: ${maxColumnIndex}`);