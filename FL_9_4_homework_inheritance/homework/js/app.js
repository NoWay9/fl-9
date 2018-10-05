function assign (initialObj) { 
    if (initialObj === null) { 
      throw new Error('Error');
    }
    let createdObj = initialObj;
    for (let i = 1; i < arguments.length; i++) {
      let currentObj = arguments[i];
      if (currentObj !== null) { 
        for (let key in currentObj) {
          if (Object.prototype.hasOwnProperty.call(currentObj, key)) {
            createdObj[key] = currentObj[key];
          }
        }
      }
    }
    return createdObj;
  }

function Bot(obj) {
    this.defaultSpeed = obj.speed;
    this.name = obj.name;
    this.speed = obj.speed;
    this.x = obj.x;
    this.y = obj.y;
}

Bot.prototype.getSpeed = function () {
    return this.speed;
}

Bot.prototype.setSpeed = function (speed) {
    this.speed = speed;
}

Bot.prototype.getDefaultSpeed = function () {
    return this.defaultSpeed;
}

Bot.prototype.getCoordinates = function () {
    return { x: this.x, y: this.y };
}

Bot.prototype.setCoordinates = function (x, y) {
    this.x = x;
    this.y = y;
}

Bot.prototype.move = function (direction) {
    switch (direction) {
        case 'up':
            this.y += this.speed;
            break;
        case 'down':
            this.y -= this.speed;
            break;
        case 'right':
            this.x += this.speed;
            break;
        case 'left':
            this.x -= this.speed;
            break;
        default:
            console.log('Error!!! Incorrect direction');
    }
}

Bot.prototype.showPosition = function () {
    console.log('I am Bot \'' + this.name + '\'. I am located at ' + this.x + ':' + this.y);
}

function Racebot(obj) {
    Bot.call(this, obj);
    this.previousDirection = null;
}

Racebot.prototype = Object.create(Bot.prototype);
Racebot.prototype.constructor = Racebot;

Racebot.prototype.move = function (direction) {
    if (direction === this.previousDirection) {
        switch (direction) {
            case 'up':
                this.y += ++this.speed;
                break;
            case 'down':
                this.y -= ++this.speed;
                break;
            case 'right':
                this.x += ++this.speed;
                break;
            case 'left':
                this.x -= ++this.speed;
                break;
            default:
                console.log('Error!!! Incorrect direction');
        }
        this.previousDirection = direction;
    } else {
        Bot.prototype.move.call(this, direction);
        this.previousDirection = direction;
    }
}

function Speedbot(obj) {
    Bot.call(this, obj);
    this.defSpeed = this.speed;
}

Speedbot.prototype = Object.create(Bot.prototype);
Speedbot.prototype.constructor = Speedbot;

Speedbot.prototype.prepareEngine = function () {
    this.speed += 2;
    this.fisrtsUse = true;
}

Speedbot.prototype.move = function (direction) {
    if (this.speed > this.defSpeed && !this.fisrtsUse) {
        this.speed -= 1;
    }
    Bot.prototype.move.call(this, direction);
    this.fisrtsUse = false;
}