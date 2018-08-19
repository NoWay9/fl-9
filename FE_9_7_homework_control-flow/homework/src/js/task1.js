var login = prompt('Enter your login');
if(login === '' || login === null){
    alert('Canceled'); 
} else if(login.length < 4){
    alert('I don\'t know any users having name length less than 4 symbols');
}
if(login === 'User'){
    var password = prompt('Enter your password');
    if(password === '' || password === null){
        alert('Canceled');
    } else if(password === 'SuperUser'){
        new Date().getHours() >= 20 ? alert('Good evening!'):alert('Good day!');
    } else{
        alert('Wrong password');
    }
} else{
    alert('I don’t know you');
}

