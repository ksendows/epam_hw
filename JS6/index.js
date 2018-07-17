// OOP 2
// Task 1
// Реализовать калькулятор по средствам ООП, с адаптивностью и приемлемым внешним видом, за пример можно взять 
// математический калькулятор Windows 10.
// Должно быть не менее 15 операций и режим памяти должен хранить до 10 последних результатов.


class Calculator {
    constructor() {
        this.operand1;
        this.operand2;
        this.operation;
        this.nextOperation;
        this.isNumberLastEnteredItem;
        this.result = 0;
        this.memory = [];
        this.memoryIndex = -1;
        this.cleanScreen = false;
        this.screen = document.body.querySelector(".calculator_screen");
        this.setSettings();
    }

    setSettings () {
        this.screen.textContent = 0;
        const numbers = Array.from(document.body.querySelectorAll(".number"));
        const operationsDouble = Array.from(document.body.querySelectorAll(".operation-double"));
        const operationsSingle = Array.from(document.body.querySelectorAll(".operation-single"));
        const memoryButtons = Array.from(document.body.querySelectorAll(".memory"));

        numbers.map(numberButton => 
            numberButton.addEventListener('click', this.handleNumberClick.bind(this)));
        operationsDouble.map(operationButton => 
            operationButton.addEventListener('click', this.handleOperationDoubleClick.bind(this)));
        operationsSingle.map(operationButton =>
            operationButton.addEventListener('click', this.handleOperationSingleClick.bind(this)));
        memoryButtons.map(operationButton =>
            operationButton.addEventListener('click', this.handleMemoryClick.bind(this)));
    }

    reset () {
        this.screen.textContent = 0;
        this.operand1 = null;
        this.operand2 = null;
        this.operation = null;
        this.cleanScreen = false;
    }

    prepareforNextCalc () {
        this.screen.textContent = isNaN(this.result) ? "Not a number" : this.result;
        this.operand1 = this.result;
        this.operand2 = null;
        this.isNumberLastEnteredItem = false;
    }

    handleNumberClick (e) {
        const currentValue = this.screen.textContent;
        let newValue = e.target.textContent;

        this.isNumberLastEnteredItem = true;

        if (currentValue === "0") {
            this.screen.textContent = newValue;
            return;
        }

        if (newValue === ",") newValue = ".";

        if (this.cleanScreen) {
            this.screen.textContent = newValue;
            this.cleanScreen = false;
        } else this.screen.textContent = currentValue + newValue;
    }

    handleOperationDoubleClick (e) {
        this.nextOperation = e.target.textContent;
        if (this.nextOperation === "C") {
            this.reset();
            return;
        }

        if (!this.isNumberLastEnteredItem) {
            this.operation = this.nextOperation === "=" ? this.operation : this.nextOperation;
            this.cleanScreen = true;
            return;
        }

        if (this.isNumberLastEnteredItem && !this.operand1) {
            this.operand1 = this.screen.textContent;
            this.cleanScreen = true;
            this.operation = this.nextOperation;
            this.isNumberLastEnteredItem = false;
            return;
        }

        this.operand2 = this.screen.textContent;

        if (this.nextOperation === "=") {
                this.calculateResult();
                this.prepareforNextCalc();
                this.operation = null;
                return;
            }

        this.calculateResult();
        this.prepareforNextCalc();
        this.cleanScreen = true;
        this.operation = this.nextOperation;
    }

    handleOperationSingleClick(e) {
        this.operand1 = this.screen.textContent;
        this.cleanScreen = true;
        this.operation = e.target.textContent;
        this.calculateResult();
        this.prepareforNextCalc();
    }

    handleMemoryClick (e) {
        const memoryClick = e.target.textContent;
        switch (memoryClick) {
            case "M+":
                if (this.memory.length > 9) {
                    this.memory.shift();
                }
                this.memory.push(this.screen.textContent);
                this.memoryIndex = this.memory.length - 1;
                this.cleanScreen = true;
                break;
            case "MC":
                this.memory = [];
                this.memoryIndex = -1;
                break;
            case "MR":
                if (this.memoryIndex < 0) {
                    this.screen.textContent = "Memory is empty";
                    this.cleanScreen = true;
                    return;
                };
                this.screen.textContent = this.memory[this.memoryIndex];
                this.memoryIndex = this.memoryIndex === 0 ? this.memory.length - 1 : this.memoryIndex - 1;
                this.cleanScreen = true;
                this.isNumberLastEnteredItem = true;
                break;
            default:
                break;
        }
    }

    calculateResult () {
        const number1 = parseFloat(this.operand1);
        const number2 = parseFloat(this.operand2);
        switch (this.operation) {
            case "+":
                this.result = number1 + number2;
                break;
            case "-":
                this.result = number1 - number2;
                break;
            case "*":
                this.result = number1 * number2;
                break;
            case "/":
                this.result = number1 / number2;
                break;
            case "sin":
                this.result = Math.sin(number1 * Math.PI / 180);
                break;
            case "cos":
                this.result = Math.cos(number1 * Math.PI / 180);
                break;
            case "tan":
                this.result = Math.tan(number1 * Math.PI / 180);
                break;
            case "1/x":
                this.result = 1/number1;
                break;
            case "x2":
                this.result = number1 * number1;
                break;
            case "x3":
                this.result = number1 * number1 * number1;
                break;
            case "ex":
                this.result = Math.pow(Math.E, number1);
                break;
            case "√":
                this.result = Math.sqrt(number1);
                break;
            case "∛":
                this.result = Math.cbrt(number1);
                break;
            case "∜":
                this.result = Math.pow(number1, 1 / 4);
                break;
            case "ln":
                this.result = Math.log(number1);
                break;
            default:
                break;
        }
    }

}

const calc = new Calculator();

// Task 2
Object.defineProperty(Array.prototype, 'customConcat', {
    enumerable: false,
    value: function (...arguments) {
        if (arguments.length === 0) return this;

        for (let i = 0; i < arguments.length; i++) {
            if (Array.isArray(arguments[i])) {
                for (let j = 0; j < arguments[i].length; j++) {
                    this[this.length] = arguments[i][j];
                }   
            } else this[this.length] = arguments[i]
        }
        return this;
    }
});
console.log("Task 2");
console.log(`[123].customConcat(2): // [123, 2]`);
console.log([123].customConcat(2));
console.log(`[123].customConcat("Hello"): // [123, "Hello"]`);
console.log([123].customConcat("Hello"));
console.log(`[1, 2, 3].customConcat([4, 5, 6]): // [1, 2, 3, 4, 5, 6]`);
console.log([1, 2, 3].customConcat([4, 5, 6]));
console.log(`[1, 2, 3].customConcat([[4, 5, 6], 7]): // [1, 2, 3, [4, 5, 6], 7]`);
console.log([1, 2, 3].customConcat([[4, 5, 6], 7]));
console.log(`[].customConcat([1,2],[3], [4]): // [1, 2, 3, 4]`);
console.log([].customConcat([1, 2], [3], [4]));
console.log(`[{ one: 1, two: 2, three: 3 }].customConcat({ four: 4, five: 5, six: 6 }): // [{ one: 1, two: 2, three: 3 }, { four: 4, five: 5, six: 6 }]`);
console.log([{ one: 1, two: 2, three: 3 }].customConcat({ four: 4, five: 5, six: 6 }));

// Task 3
// Build a deck of playing cards by generating 52 strings representing cards.There are no jokers.Each card string will have the format of:
// "ace of hearts"
// "ace of spades"
// "ace of diamonds" "ace of clubs”
// And will consist of the following ranks: ace two three four five
// six seven eight nine ten
// jack queen king
// They do not need to be in order.Additional constraints
// • 1 line only!
// • buildDeck is a variable holding your deck.It is not a function.

const makeDeck = () => {
    const deck = [];
    const suites = ["hearts", "spades", "diamonds", "clubs"];
    const ranks = ["ace", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king"];

    for (let i = 0; i < suites.length; i++) {
        for (let j = 0; j < ranks.length; j++) {
            deck.push(`${suites[i]} of ${ranks[j]}`)           
        }        
    }

    return deck;
}
const buildDeck = makeDeck();
console.log("Task 3");
console.log(buildDeck);

//Task 4

function defineMyToString() {
    if (this.length === 0) return "[]";
    let string = "[";
    for (let i = 0; i < this.length; i++) {
        if (typeof (this[i]) === "string") {
            string += `'${this[i]}',`
            continue;
        }
        if (Array.isArray(this[i])) {
            string += defineMyToString.apply(this[i]) + ",";
            continue;
        }
        string += `${this[i]},`;
    }
    string = string[string.length - 1] === ","
        ? string.slice(0, string.length - 1) + "]"
        : string + "]";
    return string;
}


Object.defineProperty(Array.prototype, 'myToString', {
    enumerable: false,
    value: defineMyToString,
});

console.log("Task 4");
console.log(`[].myToString() === "[]": ${[].myToString() === "[]"}`);
console.log(`[3.14].myToString() === "[3.14]": ${[3.14].myToString() === "[3.14]"}`);
console.log(`[1, 2.72, 4, 3.14, 9].myToString() === "[1,2.72,4,3.14,9]: ${[1, 2.72, 4, 3.14, 9].myToString() === "[1,2.72,4,3.14,9]"}`);
console.log(`[1, 2, 3].myToString() === "[1,2,3]": ${[1, 2, 3].myToString() === "[1,2,3]"}`);
console.log(`["Hello World",3.14,"Lorem Ipsum"].myToString() === "['Hello World',3.14,'Lorem Ipsum']": ${["Hello World", 3.14, "Lorem Ipsum"].myToString() === "['Hello World',3.14,'Lorem Ipsum']"}`);
console.log(`[1, [2, 4]].myToString() === "[1,[2,4]]": ${[1, [2, 4]].myToString() === "[1,[2,4]]"}`);
console.log(`[1, 2, [3, 4], [5, 6], [[7]], [8, [9]]].myToString() === “[1,2,[3,4],[5,6],[[7]],[8,[9]]]": ${[1, 2, [3, 4], [5, 6], [[7]], [8, [9]]].myToString() === "[1,2,[3,4],[5,6],[[7]],[8,[9]]]"}`);
console.log(`[true, false].myToString() === "[true,false]": ${[true, false].myToString() === "[true,false]"}`);

// Task 5
class Car {
    constructor (length, doors) {
        if (length < 7 || doors < 1) {
            console.log("Please enter at least 1 door and length at least of 7");
            return;
        }
        this.length = length;
        this.doors = doors;
        this.body = {
            component: ''
        };
        this.chassis = {
            component: ''
        };
        this.error = false;
        this.buildCar();
    }

    buildCar() {
        this.body.component = this.getTopLevel() + this.getMiddleLevel();
        this.chassis.component = this.getBottomLevel();
        if (!this.error) this.drawCar();
    }

    drawCar() {
        console.log(this.body.component + this.chassis.component);
    }

    getTopLevel () {
        return ` ${new Array(this.length - 2).join("_")}\n`;
    }

    getMiddleLevel() {
        const middleArr = [];

        const fillingLength = this.length - 3 - this.doors * 2;
        if (fillingLength < 0) {
            console.log("Given number of doors doesn't fit given length");
            this.error = true;
            return;
        }
        const filling = new Array(fillingLength + 1).join(" ");
        middleArr.push(filling);

        let front = true;
        for (let i = 0; i < this.doors; i++) {
            front ? middleArr.push('[]') : middleArr.unshift('[]');
            front = !front;
        };
        const middleLevel = '|' + middleArr.join('') + '\\\n';
        return middleLevel;
    }

    getBottomLevel() {
        const bottomArr = [];

        const axles = Math.floor(( this.length - 12 ) / 2) + 1;
        const fillingLength = this.length >= 12
            ? this.length - 5 - axles * 2
            : this.length - 5;

        const filling = new Array(fillingLength + 1).join("-");
        bottomArr.push(filling);

        if (axles > 0) {
            let rear = true;
            for (let i = 0; i < axles; i++) {
                rear ? bottomArr.unshift('-o') : bottomArr.push('o-');
                rear = !rear;
            };
        }

        const bottomALevel = "-o" + bottomArr.join("") + "o-'";
        return bottomALevel;
    }
}

console.log("Task 5");
console.log("new Car(7, 1)");
const car1 = new Car(7, 1);
console.log("new Car(9, 3)");
const car7 = new Car(9, 3);
console.log("new Car(13, 1)");
const car2 = new Car(13, 1);
console.log("new Car(16, 5)");
const car9 = new Car(16, 5);
console.log("new Car(6, 3)");
const car3 = new Car(6, 3);
console.log("new Car(9, 0)");
const car4 = new Car(9, 0);
console.log("new Car(8, 5)");
const car5 = new Car(8, 5);
console.log("new Car(21, 9)");
const car6 = new Car(21, 9);
console.log("new Car(20, 9)");
const car8 = new Car(20, 9);
