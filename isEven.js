function isEven(number) {
    const remainder = number % 2;
    if (remainder === 0) {
        return true;
    }
    else {
        return false;
    }
}
const myNumberEven = isEven(566)
console.log(myNumberEven)
const sirNumberEven = isEven(877)
console.log(sirNumberEven)