function sum() {
    let number = 0;

    return function() {
        number++;
        return number;
    }
}
const get = sum();
console.log(get());
console.log(get());
console.log(get());
console.log(get());
console.log(get());
console.log(get());

const get1 = sum();
console.log(get1());
console.log(get1());
console.log(get1());
console.log(get1());