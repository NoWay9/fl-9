function getClosestToZero() {
    var zero = Infinity;
    for(var i = 0; i < arguments.length; i++){
     if(Math.abs(arguments[i]) < Math.abs(zero)){
         zero = arguments[i]
     } 
    }
    return zero;
}
