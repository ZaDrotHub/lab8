let arr = [];

const a = 3;
const b = 3;

for (let i = 0; i < a; i++) {
    arr[i] = [];
    for (let j = 0; j < b; j++) {
      arr[i][j] = prompt(`Введіть значення елементу матриці [${i}][${j}]`);
    }
  }

for (let i = 0; i < a; i++) {
    let row = "";
    let rowSum = 0;
    for (let j = 0; j < b; j++) {
    row += arr[i][j] + "\t";
    rowSum += Number(arr[i][j]);
  }
  console.log(row + `Сума елементів рядка ${i}: ${rowSum}`);
}

for (let j = 0; j < b; j++) {
    let columnSum = 0;
    for (let i = 0; i < a; i++) {
        columnSum += Number(arr[i][j]);
  }
  console.log(`Сума елементів стовпця ${j}: ${columnSum}`);
}