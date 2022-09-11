let matrix = [
  [1, 2, 3, 4, 5],
  [16, 17, 18, 19, 6],
  [15, 24, 25, 20, 7],
  [14, 23, 22, 21, 8],
  [13, 12, 11, 10, 9]
]


let row = 4; //setr
let col = 2; //sutun

for (let i = 0; i < matrix.length; i++) {
  let arr = matrix[i];
  for (let j = 0; j < arr.length; j++) {
      if (i + 1 === row && j + 1 === col) {
        console.log(matrix[i][j]);
      }
  }
}
