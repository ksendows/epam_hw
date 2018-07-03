// Level 1
console.log("Level 1");
// Task 1
//combat(50,30);
function combat(health, damage) {
    let newHealth = health - damage;
    if (newHealth<0) return 0
    else return newHealth;
}
console.log("Task 1");
console.log("combat(50,30): ", combat(50, 30));
console.log("combat(20,30): ", combat(20, 30));

// Task 2
// max(1, 2, 3)
function intermediateMax(currentMax, intermediateValue) {
    if (intermediateValue > currentMax) {
        return intermediateValue; 
    } else {
        return currentMax;
    }
}
function max(a,b,c) {
    let currentMax=0;
    currentMax = intermediateMax(currentMax, a + b + c); 
    currentMax = intermediateMax(currentMax, a * b * c); 
    currentMax = intermediateMax(currentMax, a * b + c); 
    currentMax = intermediateMax(currentMax, a + b * c); 
    currentMax = intermediateMax(currentMax, a + (b * c));
    currentMax = intermediateMax(currentMax, a * (b + c));
    currentMax = intermediateMax(currentMax, (a + b) * c);
    currentMax = intermediateMax(currentMax, (a * b) + c); 
    return currentMax;    
}
console.log("Task 2");
console.log("max(1, 2, 3): ", max(1, 2, 3));

//Task 3
//averageGrade([5,4,3,2,5])
function averageGrade (gradeArr) {
    let gradeSum = 0;
    let gradeQuantity = gradeArr.length;
    for (let i = 0; i < gradeQuantity; i++) {
        gradeSum = gradeArr[i] + gradeSum;
    }
    let average = Math.floor(gradeSum/gradeQuantity);
    return average;
}
console.log("Task 3");
console.log("averageGrade([5,4,3,2,5]): ", averageGrade([5,4,3,2,5]));

//Task 4
// For example:
// feast("great blue heron", "garlic naan"), true) 
// feast("chickadee", "chocolate cake"), true) 
// feast("brown bear", "bear claw"), false)
function feast(name, dish) {
    let firstLetterName = name.charAt(0);
    let lastLetterName = name.charAt(name.length-1);
    
    let firstLetterDish = dish.charAt(0);
    let lastLetterDish = dish.charAt(dish.length - 1);

    return (firstLetterName===firstLetterDish) && (lastLetterName===lastLetterDish);
}
console.log("Task 4");
console.log("feast('great blue heron', 'garlic naan'): ", feast("great blue heron", "garlic naan"));
console.log("feast('chickadee', 'chocolate cake'): ", feast("chickadee", "chocolate cake"));
console.log("feast('brown bear', 'bear claw'): ", feast("brown bear", "bear claw"));

// Task 5
// countSheep(1), "1 sheep...");
// countSheep(2), "1 sheep...2 sheep..."); 
// countSheep(3), "1 sheep...2 sheep...3 sheep...");
function countSheep(count) {
    let result = '';
    for (let i =1; i <= count; i++) {
        result = result + i + " sheep...";
    }
    return result;
}
console.log("Task 5");
console.log("countSheep(1): ", countSheep(1));
console.log("countSheep(2): ", countSheep(2));
console.log("countSheep(3): ", countSheep(3));

// Task 6
// toBinary(22)
function toBinary(num) {
    let binary = [];
    let x = num;
    while (x>1) {
        let remainder = x % 2;
        binary.unshift(remainder);
        x = Math.floor(x/2);
    }
    binary.unshift(x);
    return binary.join('');
}
console.log("Task 6");
console.log("toBinary(22): ", toBinary(22));

// Task 7
// Example: n = 5 >> [5, 4, 3, 2, 1]
//reversedSequence(5);
function reversedSequence(number) {
    let count = number;
    let reversedArr = [];
    while (number!==0) {
        reversedArr.push(number);
        number--;
   }
   return reversedArr; 
}
console.log("Task 7");
console.log("reversedSequence(5): ", reversedSequence(5));

// Task 8
// isDivisible(10, 5, 2)
// isDivisible(10, 5, 3)
// isDivisible(10, 4, 2)
function isDivisible(n, x, y) {
    let remainderX = n % x;
    let remainderY = n % y;
    let result = '';
    if (remainderX===0 && remainderY===0) {
        result = `${n} is devisible by ${x} AND ${y}`;
    }  else {
        result = `${n} is not devisible by ${x} AND ${y}`;
    }
    return result;
}
console.log("Task 8");
console.log("isDivisible(10, 5, 2): ", isDivisible(10, 5, 2));
console.log("isDivisible(10, 5, 3): ", isDivisible(10, 5, 3));
console.log("isDivisible(10, 4, 2): ", isDivisible(10, 4, 2));

// Task 9
// occurrencesCount("superman spiderman man", "man")
function occurrencesCount(str, substr) {
    let count = 0;
    let strLength = str.length;
    let index = 0;
    while (index < strLength) {
        index = str.indexOf(substr, index)
        if (index !== -1) {
            count++;
            index++;
        } else break;
    }
    return count;
}
console.log("Task 9");
console.log("occurrencesCount('superman', 'man'): ", occurrencesCount("superman", "man"));
console.log("occurrencesCount('superman spiderman man', 'man'): ", occurrencesCount("superman spiderman man", "man"));
console.log("occurrencesCount('superman spiderman man', 'men'): ", occurrencesCount("superman spiderman man", "men"));

// Task 10
// removeDuplicates([2, 3, 4, 6, 2])
// removeDuplicates([2, 3, 4, 6, 2, 3, 6, 7])
function removeDuplicates(arr) {
    const newArr = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i]);
        }  
    }
    return newArr;
}
console.log("Task 10");
console.log("removeDuplicates([2, 3, 4, 6, 2]): ", removeDuplicates([2, 3, 4, 6, 2]));
console.log("removeDuplicates([2, 3, 4, 6, 2, 3, 6, 7]): ", removeDuplicates([2, 3, 4, 6, 2, 3, 6, 7]));

// Level 2
console.log("Level 2");

// Task 1
function min(array) {
    let min=array[0];
    for (let i = 1; i < array.length; i++) {
        if (min>array[i]) min=array[i];
    }
    return min;
}
console.log("Task 1");
console.log("min([34, 15, 88, 2]): ", min([34, 15, 88, 2]));
console.log("min([34, -345, -1, 100]): ", min([34, -345, -1, 100]));

// Task 2
// Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", “Yous"]
function filterStrings(arr) {
    const filterArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length<=4) filterArr.push(arr[i]); 
    }
    return filterArr;
}
console.log("Task 2");
console.log("filterStrings(['Ryan", "Kieran", "Jason", "Yous']) : ", filterStrings(["Ryan", "Kieran", "Jason", "Yous"]));

// Task 3


function remove(str, count) {
    for (let i = 0; i < count; i++) {   
        str = str.replace("!","");    
    }
    return str;
}
console.log("Task 3");
console.log("remove('Hi!', 1): ", remove("Hi!", 1));
console.log('remove("Hi!", 100): ', remove("Hi!", 100));
console.log('remove("Hi!!!", 1): ', remove('Hi!!!', 1));
console.log('remove("Hi!!!", 100): ', remove('Hi!!!', 100));
console.log('remove("!Hi", 1): ', remove('!Hi', 1));
console.log('remove("!Hi!", 1): ', remove('!Hi!', 1));
console.log('remove("!Hi!", 100): ', remove('!Hi!', 100));
console.log('remove("!!!Hi !!hi!!! !hi", 1): ', remove('!!!Hi !!hi!!! !hi', 1));
console.log('remove("!!!Hi !!hi!!! !hi", 3): ', remove('!!!Hi !!hi!!! !hi', 3));
console.log('remove("!!!Hi !!hi!!! !hi", 5): ', remove('!!!Hi !!hi!!! !hi', 5));
console.log('remove("!!!Hi !!hi!!! !hi", 100): ', remove('!!!Hi !!hi!!! !hi', 100));

// Task 4
// 348597 => [7, 9, 5, 8, 4, 3]
const reverseNum = (num) => num.toString().split("").reverse();
console.log("Task 4");
console.log("reverseNum(348597): ", reverseNum(348597));

// Task 5
// Example[1, -4, 7, 12] => 1 + 7 + 12 = 20
// Note: array may be empty, in this case return 0.
const sumOfPositives = (arr) => {
    if (arr.length===0) return 0;
    const reducer = (accumulator, currentValue) => 
        accumulator = (currentValue > 0) ? accumulator + currentValue : accumulator;
    return arr.reduce(reducer);   
}
console.log("Task 5");
console.log("sumOfPositives ([1, -4, 7, 12]): ", sumOfPositives  ([1, -4, 7, 12]));
console.log("sumOfPositives ([]): ", sumOfPositives([]));

// Task 6
const binarySum = (a,b) => {
    if (b == 0) return a;
    let sum = a ^ b;
    let carry = (a & b) << 1;
    return binarySum(sum, carry);	
}
console.log("Task 6");
console.log("binarySum (1, -4): ", binarySum(1, -4));
console.log("binarySum (4,3): ", binarySum(4,3));
console.log("binarySum (5,3): ", binarySum(5, 3));

// Task 7
String.prototype.toAlternatingCase = function () {
    let res = [];
    for (let i = 0; i < this.length; i++) {
        const symbol = this.charAt(i); 
        if (symbol.toLowerCase() === symbol) {
            res.push(symbol.toUpperCase());
        } else {
            res.push(symbol.toLowerCase()); 
        }        
    }
    return res.join("");
}
console.log("Task 7");
console.log('"hello world".toAlternatingCase() === "HELLO WORLD": ',
            "hello world".toAlternatingCase() === "HELLO WORLD");
console.log('"hello WORLD".toAlternatingCase() === "HELLO world": ', 
            "hello WORLD".toAlternatingCase() === "HELLO world");
console.log('"HELLO WORLD".toAlternatingCase() === "hello world": ', 
            "HELLO WORLD".toAlternatingCase() === "hello world");
console.log('"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld": ',
             "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld");
console.log('"12345".toAlternatingCase() === "12345" : ',
             "12345".toAlternatingCase() === "12345");
console.log('"1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E": ',
             "1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E");
console.log('"String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE": ',
             "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE");



