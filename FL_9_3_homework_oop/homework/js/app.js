function ShoppingCart(name, owner, maxCount) {
    let shoppingList = [];
    let _logs = [];
    this.name = name;
    this.owner = owner;
    this.maxCount = maxCount;
    _logs.push(`${this.name} was created in ${new Date()}`);

    this.addNewProduct = function (product) {
        if (shoppingList.length < this.maxCount) {
            product.dateAdding = new Date();
            shoppingList.push(product);
            product.add(this);
            _logs.push(`${product.name} was added to ${this.name} on ${product.dateAdding}`);
        } else {
            let temp = { price: Infinity };
            let pos;
            shoppingList.forEach((item, i) => {

                if (item.price < temp.price) {
                    temp = item;
                    pos = i;
                }
            })
            shoppingList.splice(pos, 1);
            product.dateAdding = new Date();
            shoppingList.push(product);
            product.add(this);
            _logs.push(`${product.name} was added to ${this.name} on ${product.dateAdding}`);
        }
        return this;
    }

    this.removeProduct = function (product) {
        let indexForRemove = shoppingList.findIndex(item => item.name === product.name);
        shoppingList.splice(indexForRemove, 1);
        _logs.push(`${product.name} was removed from ${this.name} on ${new Date()}`);
        product.removeProduct();
        return this;
    }

    this.getAvaragePrice = function () {
        let sumPrice = 0;
        let avaragePrice;
        shoppingList.forEach((item) => {
            sumPrice += item.price
        });
        avaragePrice = sumPrice / shoppingList.length;
        return avaragePrice;
    }

    this.getProducts = function () {
        return shoppingList;
    }

    this.getFormattedListOfProducts = function () {
        let formattedText = '';
        shoppingList.forEach((item) => {
            formattedText += `${item.name} - is on ${this.name} from 
            ${item.dateAdding}.Detailed product description: ${item.description}\n`
        });
        return formattedText;
    }
    this.getTotalPrice = function () {
        let totalPrice = 0;
        shoppingList.forEach((item) => {
            totalPrice += item.price
        });
        return totalPrice;
    }
    this.getHistory = function () {
        return _logs;
    }
}

function Product(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    let currentCart;
    let logs = [];

    this.getPrice = function () {
        return this.price;
    }
    this.setPrice = function (price) {
        if (price > this.price && price > 0 && !isNaN(price)) {
            console.log(`Change price from ${this.price} to ${price}`);
            this.price = price;
        } else {
            console.log(`Try to change price from ${this.price} to ${price}`);
        }
        return this;
    }

    this.add = function (cartInstan) {
        currentCart = cartInstan;
        logs.push(`${this.name} is added to ${cartInstan.name} on ${new Date()}`);
        return this;
    }

    this.removeProduct = function () {
        console.log(this, 'KJLGJKGJ')
        logs.push(`${this.name} is removed from ${currentCart.name} on ${new Date()}`);
        currentCart = null;
        return this;
    }


    this.getHistory = function () {
        return logs;
    }
}



const banana = new Product('banana', 'yellow', 45)
const orange = new Product('orange', 'orange', 80)
const pepper = new Product('pepper', 'red', 100)
const steveShoppingCart = new ShoppingCart('SteveCart', 'Steve', 5)
const jamesShoppingCart = new ShoppingCart('JamesCart', 'James', 3)
steveShoppingCart.addNewProduct(orange);
steveShoppingCart.addNewProduct(banana).addNewProduct(banana).removeProduct(orange).removeProduct(banana);
steveShoppingCart.addNewProduct(pepper);
console.log(steveShoppingCart.getAvaragePrice());
console.log(steveShoppingCart.getProducts());
console.log(steveShoppingCart.getFormattedListOfProducts())
console.log(steveShoppingCart.getTotalPrice());
console.log(steveShoppingCart.getHistory())
pepper.setPrice(110).add(jamesShoppingCart).removeProduct()
console.log(pepper.getHistory())
