function sum(a, b) {return a + b};
const toUpper = (string) => string.toUpperCase();
const lastItem = (array) => array[array.length - 1];
const firstItem = (array) => array[1];
const sliceThree = (string) => string.slice(string.length - 3, string.length);
const typeOfFirst = (array) => typeof array[1];
const sameType = (array) => {
    for(let i = 0; i < array.length - 1; i++) {
        if (typeof array[i] !== typeof array[i + 1]) {
            return false;
        }
    }
    return true;
}
console.log('8:', typeof sum());
console.log('9:', typeof sameType());
const minMax = (min, max) => {
    return randomGen = () => {
        return Math.random() * (max - min) + min;
    }
}
/* 
11: side effects are when a function modify something outside itself. 
Pure functions are functions without side effects.
*/
/* 
12: functions don't do anything at first, but they do something when they are called,
and they can take in parameters as input.
Methods are functions declared inside classes.
*/



