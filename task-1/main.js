// Use this matrix for solution
let matrix = [
    [4, -2, 5],
    [1, -4, -12],
    [0, 1, -3]
]
let sum =0;
let count = 0;
for(let i=0; i<matrix.length; i++){
    const element = matrix[i]
    for(let j=0; j<matrix[i].length; j++){
        const next_element = matrix[i][j]
        if(next_element<0 && next_element%2 == 0){
            sum+=next_element
            count++
        }
    }
}
console.log(`${count}\n${sum}`);
