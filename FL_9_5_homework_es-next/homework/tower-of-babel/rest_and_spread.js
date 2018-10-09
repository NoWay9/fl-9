var args = process.argv[2].split(",");
args = args.map((arg)=> +arg);

let avg = (...nums) => {
  return nums.reduce((p, c) => p + c) / nums.length;
};
console.log(avg(...args));