// 1
function elmulthree(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i % 3 === 0) {
            console.log(`${arr[i]}`);
        }
    }
}
// 2
function evenEl(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            console.log(`${arr[i]}`);
        }
    }
}
// 3
function capFL(words) {
    return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// 4
function swapFaL(s) {
    let words = s.split(' ');
    let swapped = words.map(word => {
        if (word.length > 1) {
            let firstL = word.charAt(0);
            let lastL = word.charAt(word.length - 1);
            let middleP = word.slice(1, word.length - 1);
            return lastL + middleP + firstL;
        } else {
            return word;
        }
    });

    return swapped.join(' ');
}

// 5

let numbers = Array.from({length: 10}, () => Math.random() * 20 - 10);
let positiveC = 0;
let positiveP = 1;
let negativeP = 1;
for (let num of numbers) {
    if (num > 0) {
        console.log(`Положительное число: ${num}`);
        positiveC++;
        positiveP *= num;
    } else if (num < 0) {
        console.log(`Отрицательное число: ${num}`);
        negativeP *= num;
    }
}

// 6


