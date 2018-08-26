function findType(parametr) {
   return typeof parametr;
}


function forEach(arr, func) {
    for(var i = 0; i < arr.length; i++){
        func(arr[i]);
    }
}


function map(array, funct) {
    var returnedArray = [];
    forEach(array, function(item){returnedArray.push(funct(item))});
    return returnedArray;
}


function filter(array, funct) {
    var filteredArr = [];
    forEach(array, function(item){
        if(funct(item)){
            filteredArr.push(item)
        }
    })
    return filteredArr;
}


function getAdultAppleLovers(data) {
    var res = [];
    map(data, function(item){
       if(item.age > 18 && item.favoriteFruit === 'apple'){
           res.push(item.name);
       }
    })
   return res; 
}


function keys(obj) {
    var objArray = [];
    for(key in obj){
       objArray.push(key);
    }
    return objArray;
}


function values(obj) {
   var valArray = [];
   for(key in obj){
     valArray.push(obj[key]);
   }
   return valArray;
}


function showFormattedDate(date) {
  var monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var day = date.getDate();
  var month = date.getMonth();
  var year = date.getFullYear();
  return 'It is ' + day + ' of ' + monthArr[month] + ', ' + year;
} 

