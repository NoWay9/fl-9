function reverseNumber(n) {
   var reverse = String(Math.abs(n));
   return n > 0 ? Number(reverse.split('').reverse().join('')) : -Number(reverse.split('').reverse().join(''));
}
