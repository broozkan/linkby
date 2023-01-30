console.log(add(4)(6));
console.log(add(4,6));

function add(a, b) {
    if (b === undefined) {
        return function (b) {
            return a + b;
        }
    }
    return a + b;
}