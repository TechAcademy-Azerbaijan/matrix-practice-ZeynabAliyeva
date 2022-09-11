const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {

let n = parseInt(result.input);
let res = [];
for (let i = 0; i <n; i++) {
  let element = new Array(n).fill("*");
  res.push(element);
}

console.log(res.join("\n").replaceAll(",", ""));

});
