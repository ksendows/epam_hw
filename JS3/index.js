// Task 1
// Kate and Michael want to buy a pizza and share it.Depending on the price of the pizza, they are
// going to divide the costs:
// • If the pizza is less than €5, - Michael invites Kate, so Michael pays the full price.
// • Otherwise Kate will contribute 1 / 3 of the price, but no more than €10(she's broke :-) and
// Michael pays the rest.
// How much is Michael going to pay ? Calculate the amount with two decimals, if necessary.

const sharePizza = (price) => {
    const cheapPizza = 5;
    const expensivePizza = 10;
    let michaelPay = 0;
    if (price < cheapPizza) michaelPay = price;
        else {
            if (price / 3 > expensivePizza) {
                michaelPay = price - expensivePizza;
            } else michaelPay = Math.floor(price * 2 /3 * 100) / 100;
        }
    return michaelPay;    
}

console.log("Task 1");
console.log(`sharePizza(4.99) => ${sharePizza(4.99)}`);
console.log(`sharePizza(10) => ${sharePizza(10)}`);
console.log(`sharePizza(15) => ${sharePizza(15)}`);
console.log(`sharePizza(100) => ${sharePizza(100)}`);

// Task 2
// The makeLooper() function takes a string(of non - zero length) as an argument.It returns a
// function.The function it returns will return successive characters of the string on successive
// invocations.It will start back at the beginning of the string once it reaches the end.

const makeLooper = (string) => {
    let index = -1;

    return function () {
            if (index + 1 >= string.length) index = 0
                    else index++;
                return string.charAt(index);
            }
}
var abc = makeLooper('abc');
console.log("Task 2");
console.log("var abc = makeLooper('abc');");
console.log(`abc() === "a" => ${abc() === "a"}`);
console.log(`abc() === "b" => ${abc() === "b"}`);
console.log(`abc() === "c" => ${abc() === "c"}`);
console.log(`abc() === "a" => ${abc() === "a"}`);

// Task 3
// You aren't able to use any string/array/object methods, libs etc. You have to use only couple of
// math operators and conditionals

// You need only 2 options and pretty easy logic in your function.Every number is plural except of 1.

// Russian rule is easy too:
// • Number endings: 1(example: 1, 21, 41, 121)(but not 11, 111 etc.) — singular.
// • Number endings: 2, 3, 4(example: 22, 42, 123)(but not 12, 13 & 14) — genitive singular.
// • Number endings: 5, 6, 7, 8, 9, 0(includes 11, 12, 13, 14) — genitive plural.
// 
// Write the function, which have the array of option and the number.It should return string with
// correct option.

const makePlural = (forms, day) => {
    let singular = forms[0];
    let plural = forms[forms.length - 1];
    let genitiveSingular = forms[forms.length - 2];
    let res = (day === 1 || day % 10 === 1) ? singular : plural;
    if (forms.length === 3) {
        if (day % 100 === 11 || day === 12 || day === 13 || day === 14) res = plural;
        else if (day % 10 === 2 || day % 10 === 3 || day % 10 === 4) res = genitiveSingular;
    }
    return `${day} ${res}`;
}
console.log("Task 3");
console.log(`makePlural(['day', 'days'], 0) => ${makePlural(['day', 'days'], 0)}`);
console.log(`makePlural(['day', 'days'], 1) => ${makePlural(['day', 'days'], 1)}`);
console.log(`makePlural(['day', 'days'], 2) => ${makePlural(['day', 'days'], 2)}`);
console.log(`makePlural(['day', 'days'], 12) => ${makePlural(['day', 'days'], 12)}`);
console.log(`makePlural(['day', 'days'], 21) => ${makePlural(['day', 'days'], 21)}`);
console.log(`makePlural(['день', 'дня', 'дней'], 0) => ${makePlural(['день', 'дня', 'дней'], 0)}`);
console.log(`makePlural(['день', 'дня', 'дней'], 1) => ${makePlural(['день', 'дня', 'дней'], 1)}`);
console.log(`makePlural(['день', 'дня', 'дней'], 2) => ${makePlural(['день', 'дня', 'дней'], 2)}`);
console.log(`makePlural(['день', 'дня', 'дней'], 3) => ${makePlural(['день', 'дня', 'дней'], 3)}`);
console.log(`makePlural(['день', 'дня', 'дней'], 4) => ${makePlural(['день', 'дня', 'дней'], 4)}`);
console.log(`makePlural(['день', 'дня', 'дней'], 5) => ${makePlural(['день', 'дня', 'дней'], 5)}`);
console.log(`makePlural(['день', 'дня', 'дней'], 11) => ${makePlural(['день', 'дня', 'дней'], 11)}`);
console.log(`makePlural(['день', 'дня', 'дней'], 20) => ${makePlural(['день', 'дня', 'дней'], 20)}`);
console.log(`makePlural(['день', 'дня', 'дней'], 21) => ${makePlural(['день', 'дня', 'дней'], 21)}`);
console.log(`makePlural(['день', 'дня', 'дней'], 22) => ${makePlural(['день', 'дня', 'дней'], 22)}`);


// Task 4
// You will be given a string that may have mixed uppercase and lowercase letters and your task is
// to convert that string to either lowercase only or uppercase only based on:
// • make as few changes as possible.
// • if the string contains equal number of uppercase and lowercase letters, convert the string to
// lowercase.

const solve = (string) => {
    let upperCount = 0;
    let i = 0;
    const arr = string.split('');
    let middle = Math.floor(arr.length / 2);
    while (upperCount <= middle && i < arr.length) {
        if (arr[i] === arr[i].toUpperCase()) upperCount++;
        i++;
    }
    if (upperCount > middle) 
        res = arr.map( letter => {
            if (letter === letter.toLowerCase())
                return letter.toUpperCase();
            else return letter;
        })
    else 
        res = arr.map(letter => {
            if (letter === letter.toUpperCase())
                return letter.toLowerCase();
            else return letter;
        })
    return res.join('');
}

console.log("Task 4");
console.log(`solve("coDe") ==== "code" => ${solve("coDe") === "code"}`);
console.log(`solve("CODe") === "CODE" => ${solve("CODe") === "CODE"}`);
console.log(`solve("coDE") === "code" => ${solve("coDE") === "code"}`);


// Task 5
// You certainly can tell which is the larger number between 210 and 215.
// But what about, say, 210 and 310 ? You know this one too.
// Things tend to get a bit more complicated with both different bases and exponents: which is
// larger between 39 and 56 ?
// Well, by now you have surely guessed that you have to build a function to compare powers,
// returning - 1 if the first member is larger, 0 if they are equal, 1 otherwise; powers to compare will
// be provided in the[base, exponent] format:
// Only positive integers will be tested, incluing bigger numbers - you are warned now, so be diligent
// try to implement an efficient solution not to drain too much on CW resources

const comparePowers = (numA, numB) => {
    let res = 0;
    if (numA[0] === numB[0] && numA[1] === numB[1]) return res;
    if (numA[0] === numB[0]) {
        if (numA[1] > numB[1]) res = -1
            else res = 1;
        return res;
    }
    if (numA[1] === numB[1]) {
        if (numA[0] > numB[0]) res = -1
        else res = 1;
        return res;
    }

    const dividersArr = [2, 3, 5, 7];
    dividersArr.forEach (divider => {
        if (numA[0] % divider === 0 & numB[0] % divider === 0) {
            numA[0] = numA[0] / divider;
            numB[0] = numB[0] / divider;
        }
        if (numA[1] % divider === 0 & numB[1] % divider === 0) {
            numA[1] = numA[1] / divider;
            numB[1] = numB[1] / divider;
        }
    })

    if (Math.pow(numA[0], numA[1]) > Math.pow(numB[0], numB[1])) res = -1
        else res = 1;
    return res;
}
console.log("Task 5");
console.log(`comparePowers([2, 10], [2, 15]) === 1 => ${comparePowers([2, 10], [2, 15]) === 1}`);
console.log(`comparePowers([2, 10], [3, 10]) === 1 => ${comparePowers([2, 10], [3, 10]) === 1}`);
console.log(`comparePowers([2, 10], [2, 10]) === 0 => ${comparePowers([2, 10], [2, 10]) === 0}`);
console.log(`comparePowers([3, 9], [5, 6]) === -1 => ${comparePowers([3, 9], [5, 6]) === -1}`);
console.log(`comparePowers([7, 7], [5, 8]) === -1 => ${comparePowers([7, 7], [5, 8]) === -1}`);


// Task 6
// Let's pretend your company just hired your friend from college and paid you a referral bonus.
// Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and using
// the referral bonus to buy, and build, the largest three - dimensional beer can pyramid you can.And
// then probably drink those beers, because let's pretend it's Friday too.
// A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the
// second, 9 in the next, 16, 25...
// Complete the beeramid function to return the number of complete levels of a beer can pyramid
// you can make, given the parameters of:
// 1) your referral bonus, and
// 2) the price of a beer can

const beeramid = (bonus, price) => {
    const cansQuantity = Math.floor(bonus/price);
    let cansUsed = 0;
    for (let i = 1; i < cansQuantity; i++) {
        if ((cansUsed + i * i) > cansQuantity) {
            return i-1;
        } else cansUsed += i * i;
    }
}
console.log("Task 6");
console.log(`beeramid(1500, 2) === 12 => ${beeramid(1500, 2) === 12}`);
console.log(`beeramid(5000, 3) === 16 => ${beeramid(5000, 3) === 16}`);

// Task 7
// We have a set of consecutive numbers from 1 to n.We want to count all the subsets that do not
// contain consecutive numbers.E.g.
// If our set S1 is equal to[1, 2, 3, 4, 5] The subsets that fulfill these property are:
// [1], [2], [3], [4], [5], [1, 3], [1, 4], [1, 5], [2, 4], [2, 5], [3, 5], [1, 3, 5]
// A total of 12 subsets.
// From the set S2 equals to[1, 2, 3], it is obvious that we have only 4 subsets and are:
// [1], [2], [3], [1, 3]
// Make a code that may give the amount of all these subsets for any integer n >= 2.

const testConsecutive = (arr) => {
    if (arr.length === 0)
        return false;
    if (arr.length === 1)
        return true;
    for (let i = 0; i < (arr.length - 1); i++) {
        if (arr[i+1] - arr[i] === 1) {
            return false;
        }
    }
    return true;
}

const getSets = (arr) => {
    let res = [[]];
    for (let i = 0; i < arr.length; i++) {
        let length = res.length;
        for (let j = 0; j < length; j++) {
            res.push(res[j].concat(arr[i]));
        }
    }
    return res;
}

const notConsecutiveSets = (arr) => {
    const setsArr = getSets(arr);
    let res = [];
    for (var i = 0; i < setsArr.length; i++) {
        if (testConsecutive(setsArr[i])) {
            res.push(setsArr[i]);
        }
    }
    return res;
}

console.log("Task 7");
console.log(`notConsecutiveSets([1, 2, 3, 4, 5])`);
console.log(notConsecutiveSets([1, 2, 3, 4, 5]));
console.log(`notConsecutiveSets([1, 2, 3])`);
console.log(notConsecutiveSets([1, 2, 3]));
console.log(`notConsecutiveSets([1, 2, 3, 4, 5, 6])`);
console.log(notConsecutiveSets([1, 2, 3, 4, 5, 6]));

// Task 8
// Write a method highestRank(arr)(or highest - rank in closure) which returns the number which is
// most frequent in the given input array(or ISeq).If there is a tie for most frequent number, return
// the largest number of which is most frequent.

const highestRank = (arr) => {
    let maxCount = 1;
    let element;
    for (let i = 0; i < arr.length; i++) {
        let count = 1;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] === arr[j]) count++;
        }
        if (count > maxCount) {
            maxCount = count;
            element = arr[i];
        }
        if (count === maxCount) {
            if (element < arr[i]) element = arr[i]
        }
        if (maxCount > arr.length / 2) return element;
    }
    return element;
}

console.log("Task 8");
console.log(`highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]) === 12 => ${
    highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]) === 12}`);
console.log(`highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]) === 12 => ${
    highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]) === 12}`);
console.log(`highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]) === 3 => ${
    highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]) === 3}`);

// Task 9
// Your goal is to implement a difference function, which subtracts one list from another and returns
// the result.
// It should remove all values from list a, which are present in list b.
// array_diff([1, 2], [1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
// array_diff([1, 2, 2, 2, 3], [2]) == [1, 3]

const array_diff = (arr, substractList) => 
     arr.filter (x => substractList.indexOf(x) === -1);

console.log("Task 9");
console.log(`array_diff([1, 2], [1]) =>`);
console.log(array_diff([1, 2], [1]));
console.log(`array_diff([1, 2, 2, 2, 3], [2]) =>`);
console.log(array_diff([1, 2, 2, 2, 3], [2]));


// Task 10
// Two groups of monsters will attack each other, and your job is to find out who wins.Each group
// will have a stat for each of the following: number of units, hitpoints per unit, damage per unit, and
// monster type.
// If you are not familiar with the game, just think of each group as standing in a line so that when
// they are attacked the unit at the front of the line takes the hit before the others, and if he dies the
// remaining damage will hit the next unit and so on.Therefore multiple units(or even the whole
// group) can die in one attack.
// Each group takes turns attacking, and does so until only one remains.In this kata, the first entry in
//     the input array is the first to attack.
// The inputs for this game will be two dictionaries, each with the stats of each monster.Using these
// stats, calculate which group wins, and how many units in that group stay alive(unless they are
// undead : P), and return it as a string - formatted as below:
// Input:
// mon1 = { "type": "Roc", "hitpoints": 40, "number": 6, "damage": 8 };
// mon2 = { "type": "Unicorn", "hitpoints": 40, "number": 4, "damage": 13 };
// Output:
// "[NUMBER] [TYPE](s) won" // in this case "5 Roc(s) won"
// The damage of each attack is calculated simply as (number of units) * (damage per unit).
// You must also take into account that the first unit in the group may injured BUT he still attacks
// with full strength.
// Fighting mechanics explanation:
// mon1 = { "type": "Roc", "hitpoints": 40, "number": 6, "damage": 8 }
// mon2 = { "type": "Unicorn", "hitpoints": 40, "number": 4, "damage": 13 }
// 1) The Rocs attack the Unicorns for 48 damage(6 * 8),
//     killing one and damaging the next - leaving it with 32 / 40 hitpoints.
// 2) The remaining 3 Unicorns attack the Rocs for 39 damage(3 * 13),
//     killing 0 but leaving the first one with only 1 / 40 hitpoints.
// 3) Repeat until one of the groups is left with 0 units in total.

function fight (player1, player2) {
    player1.restOfDamage = 0;
    player2.restOfDamage = 0;
    let winner;

    function fightTurn(playerA, playerB) {
        let damageMade = playerA.number * playerA.damage;
        let damageReceived = damageMade + playerB.restOfDamage;
        playerB.number -= Math.floor(damageReceived / playerB.hitpoints);
        playerB.restOfDamage = damageReceived % playerB.hitpoints;
        if (playerA.number <= 0) winner = playerB;
        if (playerB.number <= 0) winner = playerA;
        return;
    }

    while (player1.number > 0 && player2.number > 0) {
        fightTurn(player1, player2);
        fightTurn(player2, player1);
    }
    let res = `${winner.number} ${winner.type}(s) won`;
    return res;
}
console.log("Task 10");
mon1 = { 
    "type": "Roc", 
    "hitpoints": 40, 
    "number": 6, 
    "damage": 8 
};
mon2 = { 
    "type": "Unicorn", 
    "hitpoints": 40, 
    "number": 4, 
    "damage": 13 
};
console.log(fight(mon1, mon2));

//     Task 11
// Your goal is implementing function, that will calculate a sum of parameters in different brackets, like:
const sum = (a) => {

    let sum = a ? a : 0;

    function innerSum (b) {
        sum = b ? sum + b : sum;
        return innerSum;
    }
    
    innerSum.toString = function () {
        return sum;
    };

    return innerSum;
}
Object.defineProperty(sum, "toString", { enumerable: false });

console.log("Task 11");
console.log(`sum(2)(3) => ${sum(2)(3)}`);
console.log(`sum(3)(0)(3) => ${sum(3)(0)(3)}`);
console.log(`sum(2)()()(5)()(6) => ${sum(2)()()(5)()(6)}`);


// Task 12
// Make the condition true:
const a = {
    val: 0,
    valueOf: function () {
        return this.val += 1
    }
};
if (a == 1 && a == 2 && a == 3) {
    console.log("Task 12");
    console.log("You did it");
}

// Task 13
// Sorting is one of the most basic computational devices used in Computer Science.
// Given a sequence(length ≤ 1000) of 3 different key values(7, 8, 9), your task is to find the
// minimum number of exchange operations necessary to make the sequence sorted.
// One operation is the switching of 2 key values in the sequence.
//     Example
// For sequence = [7, 7, 8, 8, 9, 9], the result should be0`.
// It's already a sorted sequence.
// For sequence = [9, 7, 8, 8, 9, 7], the result should be1`.
// We can switching sequence[0] and sequence[5].
// For sequence = [8, 8, 7, 9, 9, 9, 8, 9, 7], the result should be4`.
// We can:
//  [8, 8, 7, 9, 9, 9, 8, 9, 7]
//  switching sequence[0] and sequence[3]
//  --> [9, 8, 7, 8, 9, 9, 8, 9, 7]
//  switching sequence[0] and sequence[8]
//  --> [7, 8, 7, 8, 9, 9, 8, 9, 9]
//  switching sequence[1] and sequence[2]
//  --> [7, 7, 8, 8, 9, 9, 8, 9, 9]
//  switching sequence[5] and sequence[7]
//  --> [7, 7, 8, 8, 8, 9, 9, 9, 9]
// So 4 is the minimum number of operations for the sequence to become sorted.
// Input/Output
// • [input] integer array sequence
// The Sequence.
// • [output] an integer
// the minimum number of operations.

const testSorted = (arr) => {    
    for (let i = 0; i < (arr.length - 1); i++) {
        if (arr[i + 1] < arr[i]) {
            return false;
        }
    }
    return true;
}


const minSwitchToSort = (arr) => {
    let count = 0;
    if (!testSorted(arr)) {
        for (let i = 0; i < arr.length; i++) {
            let copyArr = arr.slice(i);
            let min = Math.min(...copyArr);
            let minIndex = arr.lastIndexOf(min);
            if (arr[i] !== min) {
                let store = arr[i];
                arr[i] = min;
                arr[minIndex] = store;
                count ++;
            }         
        }
    }
    return count;
}

console.log("Task 13");
console.log(`minSwitchToSort([7, 7, 8, 8, 9, 9]) === 0 => ${minSwitchToSort([7, 7, 8, 8, 9, 9]) === 0}`);
console.log(`minSwitchToSort([9, 7, 8, 8, 9, 7]) === 1 => ${minSwitchToSort([9, 7, 8, 8, 9, 7]) === 1}`);
console.log(`minSwitchToSort([8, 8, 7, 9, 9, 9, 8, 9, 7]) === 4 => ${minSwitchToSort([8, 8, 7, 9, 9, 9, 8, 9, 7]) === 4}`);
console.log(`minSwitchToSort([7, 8, 9, 7, 7, 8, 9, 7]) === 3 => ${minSwitchToSort([7, 8, 9, 7, 7, 8, 9, 7]) === 3}`);