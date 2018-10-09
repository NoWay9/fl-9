const max = process.argv[2];
let FizzBuzz = {
  [Symbol.iterator]() {

    let count = 0;

    return {
      next() {
        count += 1;
        let result = count;
        if (count % 3 === 0)
          result = 'Fizz';
        if (count % 5 === 0)
          result = 'Buzz';
        if (count % 15 === 0)
          result = 'FizzBuzz';
        return {
          done: count <= max ? false : true,
          value: result
       }
      }
    };
  }
}

for (let n of FizzBuzz) {
  console.log(n);
}
