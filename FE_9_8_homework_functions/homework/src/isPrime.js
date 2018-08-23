function isPrime(a) {
    var firstPrime = 2;
    if(a === 1){
        return false;
    } else if(a === firstPrime){
        return true;
    }
    var i = 2;
    while(i<a){
        if(a%i === 0){
            return false;
        } else if(a !== 1){
            return true;
           }
           i++;
    }
}
