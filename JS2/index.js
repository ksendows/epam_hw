// Level 1
console.log("Level 1");
// Task 1
// Example:
// divisibleByThree('123') // true 
// divisibleByThree('8409') // true 
// divisibleByThree('100853') // false 
// divisibleByThree('33333333') // true 
// divisibleByThree('7') // false

const divisibleByThree = number => {
    const numArr = number.split('');
    const numSum = numArr.reduce( (ac, cv) => ac + cv);
    return (numSum % 3 === 0)
}
console.log("Task 1");
console.log(`divisibleByThree('123')// ${divisibleByThree('123')}`);
console.log(`divisibleByThree('8409')// ${divisibleByThree('8409')}`);
console.log(`divisibleByThree('100853')// ${divisibleByThree('100853')}`);
console.log(`divisibleByThree('33333333')// ${divisibleByThree('33333333')}`);
console.log(`divisibleByThree('7')// ${divisibleByThree('7')}`);

// Task 2
const squaresNeeded = countOfGrains => {
    if (countOfGrains === 0) return 0;
    const arr = [0,1];
    for (let i = 2; i <= 64; i++) {
        arr[i] = arr[i-1] * 2;  
        if (countOfGrains<arr[i]) return i-1  
    }
    return;
}
squaresNeeded(3);
console.log("Task 2");
console.log(`squaresNeeded(0) === 0// ${squaresNeeded(0) === 0}`);
console.log(`squaresNeeded(1) === 1// ${squaresNeeded(1) === 1}`);
console.log(`squaresNeeded(2) === 2// ${squaresNeeded(2) === 2}`);
console.log(`squaresNeeded(3) === 2// ${squaresNeeded(3) === 2}`);
console.log(`squaresNeeded(4) === 3// ${squaresNeeded(4) === 3}`);

// Task 3
// You will be given an vector of string(s).You must sort it alphabetically(case -sensitive!!) and then return 
// the first value.
// The returned value must be a string, and have "***" between each of its letters.
// ["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", “perhaps”] 
// 'b***i***t***c***o***i***n'

const sortArr = arr => {
    arr.sort((a, b) => {
        const wordA = a.toUpperCase(); 
        const wordB = b.toUpperCase(); 
        let result = 0; 
        result = wordA < wordB ? -1 : 1;
        return result;
    });
    const string = arr[0].split('').join('***');
    return string;
}
console.log("Task 3");
console.log(`sortArr(["bitcoin","take", "over", "the", "world", "maybe", "who", "knows", “perhaps”])// ${
    sortArr(["bitcoin", "take", "Dad", "over", "the", "world", "maybe", "who", "knows", "perhaps"])}`); 
console.log(`sortArr(["Bitcoin","apple", take", "over", "the", "world", "maybe", "who", "knows", “perhaps”])// ${
    sortArr(["itcoin", "apple", "take", "Dad", "over", "the", "world", "maybe", "who", "knows", "perhaps"])}`);  

// Task 4
// There are four types of final grades:
// • 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10. 
// • 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// • 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// • 0, in other cases 

const finalGrade = (exam, projects) => {
    let finalGrade = 0;
    if (exam > 90 || projects > 10) finalGrade = 100
        else if (exam > 75 && projects >= 5) finalGrade = 90
            else if (exam > 50 && projects >= 2) finalGrade = 75
    return finalGrade;
}
console.log("Task 4");
console.log(`finalGrade(100, 12) === 100// ${finalGrade(100, 12) === 100}`);
console.log(`finalGrade(99, 0) === 100// ${finalGrade(99, 0) === 100}`);
console.log(`finalGrade(10, 15) === 100// ${finalGrade(10, 15) === 100}`);
console.log(`finalGrade(85, 5) === 90// ${finalGrade(85, 5) === 90}`);
console.log(`finalGrade(55, 3) === 75// ${finalGrade(55, 3) === 75}`);
console.log(`finalGrade(55, 0) === 0// ${finalGrade(55, 0) === 0}`);
console.log(`finalGrade(20, 2) === 0// ${finalGrade(20, 2) === 0}`);

// Task 5
// The first century spans from the year 1 up to and including the year 100, 
// The second - from the year 101 up to and including the year 200, etc.
// Task :Given a year, return the century it is in.

const centuryFromYear = year => {
    const century = year % 100 === 0 ? year / 100 : Math.floor(year / 100) + 1;
    return century;
}
console.log("Task 5");
console.log(`centuryFromYear(1705) === 18// ${centuryFromYear(1705) === 18}`);
console.log(`centuryFromYear(1900) === 19// ${centuryFromYear(1900) === 19}`);
console.log(`centuryFromYear(1601) === 17// ${centuryFromYear(1601) === 17}`);
console.log(`centuryFromYear(2000) === 20// ${centuryFromYear(2000) === 20}`);

// Task 6
// Your mission is to write a function which removes this noise from the message.Notice that noise can only be
//     % $ & /#·@|o\a
// charaters, other characteres are not considered noise

const removeNoise = message => message.replace(/[\%\&\$\/\#\·\@\|\°\\\ͣ]/g, "");
 
console.log("Task 6");
console.log(`removeNoise("h%e&·%$·llo w&%or&$l·$%d%$&/#·@|°\ͣ")// ${removeNoise("h%e&·%$·llo w&%or&$l·$%d%$&/#·@|°\ͣ")}`);

// Task 7
// There are 8 balls numbered from 0 to 7. Seven of them have the same weight.One is heavier.Your task is to find its number.
// Your function findBall will receive single argument - scales object.The scales object contains an internally stored array
//  of 8 elements(indexes 0 - 7), each having the same value except one, which is greater.It also has a public method 
// named getWeight(left, right) which takes two arrays of indexes and returns - 1, 0, or 1 based on the accumulation of 
// the values found at the indexes passed are heavier, equal, or lighter.
// getWeight returns:
// -1 if left pan is heavier
// 1 if right pan is heavier
// 0 if both pans weight the same
// Examples of scales.getWeight() usage:
// scales.getWeight([3], [7]) returns - 1 if ball 3 is heavier than ball 7, 1 if ball 7 is heavier, or 0 if these balls 
// have the same weight.
// scales.getWeight([3, 4], [5, 2]) returns - 1 if weight of balls 3 and 4 is heavier than weight of balls 5 and 2 etc.
// So where's the catch, you may ask. Well - the scales is very old. You can use it only 3
// TIMES before the scale breaks.

const scales = {
    arr: [],
    getWeight: (arr1, arr2) => {
        const sumArr1 = arr1.reduce( (ac, cv) => ac + cv);
        const sumArr2 = arr2.reduce((ac, cv) => ac + cv);
        let result = 0;
        result = sumArr1 > sumArr2 ? -1 : 1;
        console.log ("Scale used")
        return result;
    }
}
const findBall = ( arr ) => {
    let result;
    const findMaxWeight = (arr) => {
        const arr1 = arr.slice(0, arr.length / 2);
        const arr2 = arr.slice(arr.length / 2, arr.length);
        if (arr1.length !== 0)
            if (scales.getWeight(arr1, arr2) === -1) findMaxWeight(arr1)
            else findMaxWeight(arr2);
        else result = arr[0];
        return result;
    }    
    result = arr.indexOf(findMaxWeight(arr));
    return result;
}
console.log("Task 7");
scales.arr = [10, 10, 10, 10, 20, 10, 10, 10];
console.log(`[10,10,10,10,20,10,10,10]// ${findBall(scales.arr)}`);
scales.arr = [10, 10, 10, 10, 10, 10, 10, 50];
console.log(`[10,10,10,10,10,10,10,50]// ${findBall(scales.arr)}`);
scales.arr = [30, 10, 10, 10, 10, 10, 10, 10];
console.log(`[30,10,10,10,10,10,10,10]// ${findBall(scales.arr)}`);

// Task 8
// In this task, you will be given an integer n and your task will be to return the largest integer that is <= n 
// and has the highest digit sum.
// For example:
// solve(100) = 99. Digit Sum for 99 = 9 + 9 = 18. No other number <= 100 has a higher digit 
// sum.solve(10) = 9
// solve(48) = 48. Note that 39 is also an option, but 48 is larger.

const solve = (num) => {
    let sum = 0;
    let result = 0;
    for (let i = 1; i <= num; i++) {
        const digits = i.toString().split('');
        let digitsSum = digits.reduce((ac, cv) => Number.parseInt(ac) + Number.parseInt(cv));
        if (sum <= digitsSum) {
            sum = digitsSum;
            result = result > i ? result : i;
        }
    }
    return result;
}

console.log("Task 8");
console.log(`solve(100) === 99// ${solve(100) === 99}`);
console.log(`solve(10) === 9// ${solve(10) === 9}`);
console.log(`solve(48) === 48// ${solve(48) === 48}`);

// Task 9
// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3 etc.
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.

const findHighestWord = (string) => {
    const arrString = string.split(' ');
    const arrWords = arrString.map(word => word.split(''));
    const arrSum = arrWords.map(
        arr => arr.reduce((ac, cv) => ac + cv.charCodeAt(0) - 96, 0));
    const max = Math.max(...arrSum);
    const index = arrSum.indexOf(max);
    return arrWords[index].join("");
}
console.log("Task 9");
console.log(`findHighestWord("hello beautiful world")// ${findHighestWord("hello beautiful world")}`);
console.log(`findHighestWord("hello beautiful world zzzz")// ${findHighestWord("hello beautiful world zzzz")}`);

// Task 10
// The alphabetized kata
// Re - order the characters of a string, so that they are concatenated into a new string in "case- 
// insensitively-alphabetical-order-of-appearance" order.Whitespace and punctuation shall simply be removed!
// The input is restricted to contain no numerals and only words containing the english alphabet letters.

const alphabetized = string => {
    const cleanedArr = string.replace(/[\:\;\.\,\?\!\-\'\"\s]/g, "").split('');
    cleanedArr.sort((a, b) => {
        let letterA = a.toUpperCase(); 
        let letterB = b.toUpperCase(); 
        let res = (letterA < letterB) ? -1 : 1;
        if (letterA === letterB) {
            res = (a < b) ? -1 : 1;
        }
        return res;
    });
    return cleanedArr.join("");
}
console.log("Task 10");
console.log(`alphabetized("The Holy Bible") === "BbeeHhilloTy"// ${alphabetized("The Holy Bible") === "BbeeHhilloTy"}`);

// Task 11
// Write a function that takes an array of numbers(integers for the tests) and a target number.It should find two 
// different items in the array that, when added together, give the target value.The indices of these items should 
// then be returned in an array like so: [index1, index2].
// The input will always be valid(numbers will be an array of length 2 or greater, and all of the items will be numbers; 
// target will always be the sum of two different items from that array).

const indexesOfTargetSum = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target)
                return [i,j]
        }
    }
} 
console.log("Task 11");
console.log(`indexesOfTargetSum([9,3,57,12,38], 15)// ${indexesOfTargetSum([9,3,57,12,38], 15)}`);
console.log(`indexesOfTargetSum([10,35,27,24,10], 20)// ${indexesOfTargetSum([10,35,27,24,10], 20)}`);
console.log(`indexesOfTargetSum([20,33,54,45,101,59,10], 30)// ${indexesOfTargetSum([20, 33, 54, 45, 101, 59, 10], 30)}`);

// Task 12
// Given a list of integers, return the nth smallest integer in the list.Only distinct elements should be considered 
// when calculating the answer.n will always be positive(n > 0)
// If the nth small integer doesn't exist, return null.
// Notes: "indexing" starts from 1
// Example:
// nthSmallest([1, 3, 4, 5], 7) ==> null // n is more than the size of the list 
// nthSmallest([4, 3, 4, 5], 4) ==> null // 4th smallest integer doesn't exist 
// nthSmallest([45, -10, 4, 5, 4], 4) ==> 45 // 4th smallest integer is 45

const removeDuplicates = (arr) => {
    const newArr = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

const nthSmallest = (arr, n) => {
    const uniquiArr = removeDuplicates(arr);
    if (uniquiArr.length < n) return null;
    uniquiArr.sort((a, b) => a - b);
    return uniquiArr[n-1];
}
console.log("Task 12");
console.log(`nthSmallest([1, 3, 4, 5], 7) === null// ${nthSmallest([1, 3, 4, 5], 7) === null}`);
console.log(`nthSmallest([4, 3, 4, 5], 4) === null// ${nthSmallest([4, 3, 4, 5], 4) === null}`);
console.log(`nthSmallest([45, -10, 4, 5, 4], 4) === 45// ${nthSmallest([45, -10, 4, 5, 4], 4) === 45}`);


// Level 2 
console.log("Level 2");

// Task 1
// Implement your own native method of arr.shift(), arr.unshift()
Object.defineProperty(Array.prototype, 'nativeUnshift', {
    enumerable: false,
    value: function (...elements) {
                let lastIndex = this.length;
                let elementsQuantity = elements.length;
                for (let i = 0; i < elementsQuantity; i++) {
                    if (i + elementsQuantity < lastIndex + elementsQuantity) this[i + elementsQuantity] = this[i];
                    this[i] = elements[i];
                }
                return this.length;
            }
});
Object.defineProperty(Array.prototype, 'nativeShift', {
    enumerable: false,
    value: function () {
                let firstElement = this[0];
                if (this.length === 1) {
                    this.length = 0;
                    return firstElement;
                }
                for (let i = 1; i < this.length; i++) {
                    this[i - 1] = this[i];
                }
                this.length = this.length - 1;
                return firstElement;
            }
});
console.log("Task 1");
const a = [5];
console.log("a = [5]");
console.log(`a.nativeUnshift(4)// ${a.nativeUnshift(4)}`);
console.log(`a = `);
console.log(a);
console.log(`a.nativeUnshift(0,1,2,3)// ${a.nativeUnshift(0, 1, 2, 3)}`);
console.log(`a = `);
console.log(a);
console.log(`a.nativeShift()// ${a.nativeShift()}`);
console.log(`a = `);
console.log(a);

// Task 2
// Implement your own native method of arr.pop(), arr.push()
Object.defineProperty(Array.prototype, 'nativePush', {
    enumerable: false,
    value: function (...elements) {
                let lastIndex = this.length;
                for (let i = 0; i < elements.length; i++) {
                    this[lastIndex] = elements[i];
                    lastIndex++;
                }
                return this.length;
            }
});
Object.defineProperty(Array.prototype, 'nativePop', {
    enumerable: false,
    value: function () {
                let newLength = this.length - 1;
                let lastElement = this[newLength];
                this.length = newLength;
                return lastElement;
            }
});
console.log("Task 2");
console.log(`a.nativePush(6)// ${a.nativePush(6)}`);
console.log(`a.nativePush(7,8,9)// ${a.nativePush(7, 8, 9)}`);
console.log(`a = `);
console.log(a);
console.log(`a.nativePop()// ${a.nativePop()}`);
console.log(`a = `);
console.log(a);

// Task 3
// Implement your own native method of arr.filter()
Object.defineProperty(Array.prototype, 'nativeFilter', {
    enumerable: false,
    value: function (callback, thisArg) {
                let filteredArr = [];
                for (let i = 0; i < this.length; i++) {
                    if (thisArg) {
                        if (callback.call(thisArg, this[i])) filteredArr.nativePush(this[i]);
                    }
                    else if (callback(this[i])) filteredArr.nativePush(this[i]);
                }
                return filteredArr;
            }
});
console.log("Task 3");
console.log(`['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'].nativeFilter(word => word.length > 6)// ${
    ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'].nativeFilter(word => word.length > 6)}`);
console.log(`['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'].nativeFilter(word => word.length > 3)// ${
    ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'].nativeFilter(word => word.length > 3)}`);

console.log("Filter with thisArg:");

const filterByRange = function (value) {
    return (value >= this.minimum) && (value <= this.maximum);
}
const numbers = [6, 12, 15, 16, -12];
const obj = { minimum: 10, maximum: 20 }

let result = numbers.filter(filterByRange, obj); 
console.log("Array.filter result", result);

let nativeResult = numbers.nativeFilter(filterByRange, obj);
console.log("Native filter result", nativeResult);

// Task 4
// Implement your own native method of arr.map()
Object.defineProperty(Array.prototype, 'nativeMap', {
    enumerable: false,
    value: function (callback, thisArg) {
                let newArr = [];
                for (let i = 0; i < this.length; i++) {
                    if (thisArg) newArr.nativePush(callback.call(thisArg, this[i]));
                    else newArr.nativePush(callback(this[i]));
                }
                return newArr;
            }
});
console.log("Task 4");
console.log(`[1, 4, 9, 16].nativeMap(x => x * 2)// ${[1, 4, 9, 16].nativeMap(x => x * 2)}`);
console.log(`[1, 4, 9, 16].nativeMap(function (x) { return x * this.multiplier}, { multiplier: 2})// ${
    [1, 4, 9, 16].nativeMap(function (x) { return x * this.multiplier} , { multiplier: 2 })}`);

// Task 5
// Implement your own native method of arr.reduce()
Object.defineProperty(Array.prototype, 'nativeReduce', {
    enumerable: false,
    value: function (callback, initialValue) {
                let accumulator;
                if (initialValue) {
                    accumulator = initialValue;
                    for (let i = 0; i < this.length; i++) {
                        accumulator = callback(accumulator, this[i]);
                    }
                } else {
                    accumulator = this[0];
                    for (let i = 1; i < this.length; i++) {
                        accumulator = callback(accumulator, this[i]);
                    }
                }
                return accumulator;
            }
});
console.log("Task 5");
console.log(`[10, 40, 50, 16].nativeReduce( (ac, cv) => ac + cv, 10)// ${
    [10, 40, 50, 16].nativeReduce((ac, cv) => ac + cv, 10)}`);
console.log(`[[0, 1], [2, 3], [4, 5]].nativeReduce((accumulator, currentValue) => accumulator.concat(currentValue),[-1])// ${
    [[0, 1], [2, 3], [4, 5]].nativeReduce((accumulator, currentValue) => accumulator.concat(currentValue), [-1])}`);

// Task 6
// Create a function, that calculate max nesting level in array.

const maxNesting = obj => {
    let max = 1;
    const countNest = function (obj) {
        let res = 1;
        for (let key in obj) {
            res++;
            if (typeof obj[key] === "object") {
                countNest(obj[key]);
                if (res > max) max = res ;
            };
        };
    return;
    };
    countNest(obj);
    return max;
};

const multidimensionalObject = {
    a: "0 nesting level",
    b: { 
        c: "1 nesting level",
        d: ["2 nesting level", { 
            e: "3 nesting level",
            f: ["4 nesting level"]
        }]
    },
    g: {
        h: "1 nesting level",
        i: ["2 nesting level", {
            j: "3 nesting level",
            k: "3 nesting level"
        }]
    },
    l: {
        m: "1 nesting level",
        n: ["2 nesting level", {
            o: "3 nesting level",
            p: ["4 nesting level", {
                q: "5 nesting level"
            }]
        }]
    },
} 

console.log("Task 6");
console.log("MultidimensionalObject:");
console.log(multidimensionalObject);
console.log(`maxNesting(multidimensionalObject)// ${maxNesting(multidimensionalObject)}`);

// Task 7
// Create a function for object deep copy, that return whole copy of entered object.
const deepCopy = obj => {
    const copy = Array.isArray(obj) ? [] : {};
    for (var key in obj) {
        if (obj[key] != null && typeof (obj[key]) == "object")
            copy[key] = deepCopy(obj[key]);
        else
            copy[key] = obj[key];
    }
    return copy;
}

const deepCopyJSON = (obj) => JSON.parse(JSON.stringify(obj)); 

console.log("Task 7");
console.log(`deepCopy(multidimensionalObject)//`);
console.log(deepCopy(multidimensionalObject));
console.log(`deepCopyJSON(multidimensionalObject)//`);
console.log(deepCopyJSON(multidimensionalObject));

// Task8
// For a given chemical formula represented by a string, count the number of atoms of each element contained 
// in the molecule and return an object
const parseMolecule = (formula) => {
    let res = {};
    formula = formula.replace("[","(");
    formula = formula.replace("]", ")");
    const atomsCount = {};

    const parse = (formula, multiplier) => {
        const formulaArr = formula.split("");


        const parseSimpleElement = () => {
            if(formulaArr[i].toUpperCase() === formulaArr[i] && isNaN(formulaArr[i])
            && formulaArr[i] !== "(" && formulaArr[i] !== ")"
            && formulaArr[i] !== "[" && formulaArr[i] !== "]") {
                let key = formulaArr[i];
                let value = 0;
                while (i !== formulaArr.length - 1 && formulaArr[i + 1].toUpperCase() !== formulaArr[i + 1]) {
                    key = key.concat(formulaArr[i + 1]);
                    i++;
                }
                if (i !== formulaArr.length - 1 && !isNaN(formulaArr[i + 1])) 
                    value = parseInt(formulaArr[i + 1])
                else value = 1;
            
                if (multiplier) value = value * multiplier;
                if (atomsCount[key]) value = atomsCount[key] + value;
                atomsCount[key] = value;
            }
        }


        for (var i = 0; i < formulaArr.length; i++) {
            parseSimpleElement();

            if (formulaArr[i] === "(") {
                i++;
                let j = i;
                let paretheses = 1;
                while (paretheses !== 0) {
                    if (formulaArr[j] === "(") paretheses++;
                    if (formulaArr[j] === ")") paretheses--;
                    j++;
                }
                multiplier = multiplier ? multiplier * parseInt(formulaArr[j]) : parseInt(formulaArr[j]);
                parse(formulaArr.slice(i,j-1).join(''), multiplier);
                i = j;
            }
        }
    res = Object.assign(res, atomsCount);
    return atomsCount;
    }

    parse(formula);
    return res;
}


console.log("Task 8");
var water = 'H2O';
console.log(`parseMolecule(water) === {H: 2, O: 1}//`);
console.log(parseMolecule(water));
var magnesiumHydroxide = 'Mg(OH)2';  
console.log('parseMolecule(Mg(OH)2) === {Mg: 1, O: 2, H: 2}//'); 
console.log(parseMolecule(magnesiumHydroxide));
console.log(`parseMolecule('Fe(NeO3)2') === {Fe: 1, Ne: 2, O: 6}//`);
console.log(parseMolecule('Fe(NeO3)2'));
var fremySalt = 'K4[ON(SO3)2]2';  
console.log('parseMolecule(K4[ON(SO3)2]5) === {K: 4, O: 14, N: 2, S: 4}//');
console.log(parseMolecule(fremySalt));  
