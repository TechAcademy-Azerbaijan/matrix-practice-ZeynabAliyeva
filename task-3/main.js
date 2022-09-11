// Use this matrix for solution

let matrix = [
    [2, 5, 3, 1, 4],
    [3, 5, 2, 3, 4],
    [4, 6, 1, 2, 3],
    [4, 5, 6, 7, 7]
]

let min = matrix[0][0];

for(let i=0; i<matrix.length; i++){
  const arr = matrix[i]
  for(let j=0; j<arr.length; j++){
    const element = arr[j]
    if(element < min){
      min = element;
    }
  }
}
for(let i=0; i<matrix.length; i++){
  const arr = matrix[i]
  for(let j=0; j<arr.length; j++){
    const element = arr[j]
    if(element === min){
      console.log(i+1);
    }
  }
}


























// let min = matrix[0][0];

// for (let i = 0; i < matrix.length; i++) {
//   let arr = matrix[i];
//   for (let j = 0; j < arr.length; j++) {
//     const element = arr[j];
//     if (element < min) {
//       min = element;
//     }
//   }
// }

// for (let i = 0; i < matrix.length; i++) {
//     let arr = matrix[i];
//     for (let j = 0; j < arr.length; j++) {
//       const element = arr[j];
//       if (element === min) {
//         console.log(i + 1);
//       }
//     }
//   }