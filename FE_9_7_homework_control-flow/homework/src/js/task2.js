var playBool = confirm('Do you want to play a game?');
if(!playBool){
      alert('You did not become a millionaire, but can.')
    }
var attempt = 0;
var numberPrefix = 5;
var firstPrize = 10;
var secondPrize = 5;
var thridPrize = 2;
var prize = 0;
var currentPrize;
var attemptFirst = 1;
var rangeNum = 5;
var loopValue = -1;
var resetFirstPrize = 10;
var resetSecondPrize = 5;
var randNumber = Math.floor(Math.random()*numberPrefix); 
while(playBool){
            if(attempt === 0){
                currentPrize = firstPrize;
            }
            if(attempt === attemptFirst){
                currentPrize = secondPrize;
            }
            if(attempt === 2){
                currentPrize = thridPrize;
            }
            var userNumber = prompt(`
            Enter a number from 0 to ${numberPrefix}
            Attempts left: ${attempt}
            Total prize: ${prize}$
            Possible prize on current attempt: ${currentPrize}$`);
            if(Number(userNumber) === randNumber){
                if(attempt === 0){
                    prize += firstPrize;
                    var wantContinue = confirm('Congratulation!Your prize is: ' + prize + '. Do you want to continue?');
                    if(!wantContinue){
                        alert('Thank you for a game. Your prize is: ' + prize);
                        playBool = confirm('Do you want to play a game?');
                        if(playBool){
                            numberPrefix = rangeNum;
                            randNumber = Math.floor(Math.random()*numberPrefix);
                            prize = 0;
                            attempt = loopValue;
                            firstPrize = resetFirstPrize;
                            secondPrize = resetSecondPrize;
                            thridPrize = 2;  
                        }                  
                    }
                    if(wantContinue){
                        numberPrefix *= 2;
                        randNumber = Math.floor(Math.random()*numberPrefix);
                        playBool = true;
                        firstPrize *= 3;
                        attempt = loopValue;
                        secondPrize = Math.floor(firstPrize/2);
                        thridPrize = Math.floor(firstPrize/4);
                    }
                }
                if(attempt === attemptFirst){ 
                    secondPrize = Math.floor(firstPrize/2);
                    prize += secondPrize;
                     wantContinue = confirm('Congratulation!Your prize is: ' + prize + '. Do you want to continue?');
                    if(!wantContinue){
                        alert('Thank you for a game. Your prize is: ' + prize);
                        playBool = confirm('Do you want to play a game?'); 
                        if(playBool){
                            numberPrefix = rangeNum;
                            randNumber = Math.floor(Math.random()*numberPrefix);
                            prize = 0;
                            attempt = loopValue;
                            firstPrize = resetFirstPrize;
                            secondPrize = resetSecondPrize;
                            thridPrize = 2;  
                        }                  
                    }
                    if(wantContinue){      
                        numberPrefix *= 2;
                        randNumber = Math.floor(Math.random()*numberPrefix);
                        playBool = true;
                        firstPrize *= 3;
                        secondPrize = Math.floor(firstPrize/2);
                        thridPrize = Math.floor(firstPrize/4);
                        attempt = loopValue;
                    }
                }
                if(attempt === 2){
                    thridPrize = Math.floor(firstPrize/4);
                    prize += thridPrize;
                    wantContinue = confirm('Congratulation!Your prize is: ' + prize + '. Do you want to continue?');
                    if(!wantContinue){
                        alert('Thank you for a game. Your prize is: ' + prize);
                        playBool = confirm('Do you want to play a game?');
                        prize = 0;
                        
                        if(playBool){
                            numberPrefix = rangeNum;
                            randNumber = Math.floor(Math.random()*numberPrefix);
                            prize = 0;
                            attempt = loopValue;
                            firstPrize = resetFirstPrize;
                            secondPrize = resetSecondPrize;
                            thridPrize = 2;
                            
                        }                  
                    }
                    if(wantContinue){
                        numberPrefix *= 2;
                        randNumber = Math.floor(Math.random()*numberPrefix);
                        playBool = true;
                        firstPrize *= 3;
                        secondPrize = Math.floor(firstPrize/2);
                        thridPrize = Math.floor(firstPrize/4);
                        attempt = loopValue;
                    }
                }
            }
            attempt++;
            if(attempt === 3){
                playBool = false;
                alert('Thank you for a game. Your prize is: ' + prize);
                playBool = confirm('Do you want to play a game?');  
                attempt = 0;
                if(playBool){
                    numberPrefix = rangeNum;
                    randNumber = Math.floor(Math.random()*numberPrefix);
                    prize = 0;
                    firstPrize = resetFirstPrize;
                    secondPrize = resetSecondPrize;
                    thridPrize = 2;
                }
            }
        } 