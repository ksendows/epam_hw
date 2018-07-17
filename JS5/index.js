// OOP 
// Task 1

class Person {
    constructor(name) {
        this.name = name;
    }

    greet(yourName) {
        return "Hello " + yourName + ", my name is " + this.name;
    }

}

console.log("Task 1");
var joe = new Person('Joe');
console.log(`joe.greet('Kate'): ${joe.greet('Kate')}`);
console.log(`joe.name === 'Joe': ${joe.name === 'Joe'}`);


// Task 2

const matchArrs = (arrSearch, arrTake) => {
    arrSearch.sort(function (a, b) {
        var letterA = a.toUpperCase(); 
        var letterB = b.toUpperCase(); 
        if (letterA > letterB) {
            return -1;
        }
        if (letterA < letterB) {
            return 1;
        }
        return 0;
    });
    const letter = arrSearch[2][2];

    const result = arrTake.find(word => word[0].toUpperCase() === letter.toUpperCase());

    return result ? result : 'Nothing here';
}
console.log("Task 2");
console.log(`matchArrs(["Blob", "aqua", "Center", "Circle"],["Oliver", "opposite", "desk", "wow"]): ${matchArrs(["Blob", "aqua", "Center", "Circle"], ["Oliver", "Opposite", "desk", "wow"])}`);
console.log(`matchArrs(["Blob", "aqua", "Center", "Circle"],["desk", "wow"]): ${matchArrs(["Blob", "aqua", "Center", "Circle"], ["desk", "wow"])}`);


// Task 3

class Router {
    constructor() {
        this.url;
        this.method;
        this.action;
    }

    bind(url, method, action) {
        this.url = url;
        this.method = method;
        this.action = action;
    }

    runRequest(url, method) {
        if (url === this.url && method === this.method) 
            return this.action()
        else return 'Error 404: Not Found'
    }
}

console.log("Task 3");
var router = new Router;
router.bind('/hello', 'GET', function () { return 'hello world'; });
console.log(`router.runRequest('/hello', 'GET'): ${router.runRequest('/hello', 'GET')}`);
router.bind('/login', 'GET', function () { return 'Please log-in.'; });
console.log(`router.runRequest('/login', 'GET'): ${router.runRequest('/login', 'GET')}`);

router.bind('/hello', 'GET', function () { return 'hello'; });
console.log(`router.runRequest('/hello', 'GET'): ${router.runRequest('/hello', 'GET')}`);
router.bind('/login', 'POST', function () { return 'Logging-in.'; });

console.log(`router.runRequest('/login', 'POST'): ${router.runRequest('/login', 'POST')}`);
console.log(`router.runRequest('/login', 'POOOOST'): ${router.runRequest('/login', 'POOOOST')}`);
console.log(`router.runRequest('/loginnnnnn', 'POST'): ${router.runRequest('/loginnnnnn', 'POST')}`);

// Task 4

Boolean.prototype.myToString = function () {
    if (this.valueOf() == true) {
        return "true";
    } else {
        return "false";
    }
};

Number.prototype.myToString = function () {
    return `${this.valueOf()}`;
};

Object.defineProperty(Array.prototype, 'myToString', {
    enumerable: false,
    value: function () {
        if (this.length === 0) return "[]";
        let string = "[";
        for (let i = 0; i < this.length - 1; i++) {
            string += this[i] + ", "           
        }
        string += this[this.length - 1] + "]";
        return string;
    }
});

console.log("Task 4");
console.log(`(true).myToString(): ${(true).myToString()}`);
console.log(`(false).myToString(): ${(false).myToString()}`);
console.log(`(3).myToString(): ${(3).myToString()}`);
console.log(`(3.14).myToString(): ${(3.14).myToString()}`);
console.log(`(-78).myToString(): ${(-78).myToString()}`);
console.log(`Math.PI.myToString(): ${Math.PI.myToString()}`);
console.log(`[].myToString(): ${[].myToString()}`);
console.log(`[1].myToString(): ${[1].myToString()}`);
console.log(`[2, 4, 8, 17].myToString(): ${[2, 4, 8, 17].myToString()}`);
console.log(`[Math.PI, Math.E].myToString(): ${[Math.PI, Math.E].myToString()}`);


// Task 5
const getSurnamePart = (surname) => {
    if (surname.length > 5) return surname;
    
    const paddedLength = 6 - surname.length;
    return (`${surname}${new Array(paddedLength).join("9")}`);
} 

const formatDate = (date) => (date < 10) ? `0${date}` : date;

const getMonthGenderPart = (month, gender) => (gender.toUpperCase() === "M") ? formatDate(month) : (month + 50); 

const getNameMiddleNamePart = (name, middleName) => middleName ? `${name[0]}${middleName[0]}` : `${name[0]}9`

const getDriverLicenseNumber = (data) => {
    const licenseParts = [];
    const name = data[0];
    const middleName = (data.length === 5) ? data[1]: null;
    const surname = (data.length === 5) ? data[2] : data[1];
    const date = (data.length === 5) ? data[3] : data[2];
    const gender = (data.length === 5) ? data[4] : data[3];

    const parsedDate = new Date (date);
    const day = parsedDate.getDate();
    const month = parsedDate.getMonth() + 1;
    const year = parsedDate.getFullYear();

    licenseParts.push(getSurnamePart(surname));
    licenseParts.push(getMonthGenderPart(month, gender));
    licenseParts.push(formatDate(day));
    licenseParts.push(year.toString()[3]);
    licenseParts.push(getNameMiddleNamePart(name, middleName));
    licenseParts.push("9");
    licenseParts.push("AA");

    return licenseParts.join('');
}

console.log("Task 5");
console.log(`getDriverLicenseNumber(["John", "James", "Smith", "01-Jan-2000", "M"]): ${getDriverLicenseNumber(["John", "James", "Smith", "01-Jan-2000", "M"])}`);
console.log(`getDriverLicenseNumber(["Jane", "Po", "11-Dec-1987", "F"]): ${getDriverLicenseNumber(["Jane", "Po", "11-Dec-1987", "F"])}`);


// Task 6
class SnakesLadders {
    constructor(player1, player2) {
        this.player1 = {
            name: player1,
            score: 0,
            turn: true
        };
        this.player2 = {
            name: player2,
            score: 0,
            turn: false
        };
        this.laders = {
            "2": 38,
            "7": 14,
            "8": 31,
            "15": 26,
            "21": 42,
            "28": 84,
            "36": 44,
            "51": 67,
            "71": 91,
            "78": 98,
            "87": 94
        }

        this.snakes = {
            "99": 80,
            "95": 75,
            "92": 88,
            "89": 68,
            "74": 53,
            "64": 60,
            "62": 19,
            "49": 11,
            "46": 25,
            "16": 6
        }
    }
    
    play(die1, die2) {
        if (this.player1.score === 100 || this.player2.score === 100) return "Game over!";

        const activePlayer = this.player1.turn ? this.player1 : this.player2;
        activePlayer.score = activePlayer.score + die1 + die2;

        if (activePlayer.score === 100) return `Player ${activePlayer.name} Wins!`;

        if (activePlayer.score > 100) activePlayer.score = activePlayer.score - die1 - die2 - 1;
    
        if (this.laders[activePlayer.score]) activePlayer.score = this.laders[activePlayer.score];
        if (this.snakes[activePlayer.score]) activePlayer.score = this.snakes[activePlayer.score];

        if (die1 !== die2) {
            this.player1.turn = !this.player1.turn;
            this.player2.turn = !this.player2.turn;
        }

        return `Player ${activePlayer.name} is on square ${activePlayer.score}`;
    }
}
console.log("Task 6");

const game = new SnakesLadders("One", "Two");