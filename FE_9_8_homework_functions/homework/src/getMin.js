function getMin() {
    var temp = Infinity;
    for(var i = 0; i < arguments.length; i++){
        if(arguments[i] < temp){
            temp = arguments[i];
        }
    }
    return temp;
}
