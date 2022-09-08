// Use this matrix for solution

let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 1, 2, 3],
    [4, 5, 6, 7]
  ];
  
  let r = 3;
  let c = 2;
  let res = [];
  
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      res.push(matrix[i][j]);
      if (res.length === c) {
        console.log(res.toString().replaceAll(",", " "));
        res = [];
      }
    }
  }