var money = prompt('Enter value of money:')
var discount = prompt('Enter value of discount, %')
var saved = money * discount/100;
var priceWithDiscount = money - saved;
var message = money % 1 !== 0 ? 'Price without discount:' + Number(money).toFixed(2) + ' ' + 'Discount:' + 
 Number(discount).toFixed(2) + '%' + ' ' + 'Price with discount:' + Number(priceWithDiscount).toFixed(2) + 
 ' ' + 'Saved:' + Number(saved).toFixed(2) : 'Price without discount:' + money + ' ' + 'Discount:' + 
  discount + '%' + ' ' + 'Price with discount:' + priceWithDiscount + ' ' + 'Saved:' + saved;
var consoleMessage = money > 0 ? message : 'Invalid data';
console.log(consoleMessage);