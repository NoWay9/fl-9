const max = +process.argv[2];

let FizzBuzz = function*(){
  let count = 0;
  while (count < max) {
    count += 1;
    let result = count;
    if (count % 15 === 0) result = 'FizzBuzz';
    if (count %  3 === 0) result = 'Fizz';
    if (count %  5 === 0) result = 'Buzz';
    yield result;
  }
}();

for (var result of FizzBuzz) {
  console.log(result);
}