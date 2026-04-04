"use strict";
function fibonacci(n) {
    let a = 0, b = 1, temp;
    if (n < 0) {
        throw new Error("Input must be a non-negative integer.");
    }
    else if (n === 0) {
        return a;
    }
    else if (n === 1) {
        return b;
    }
    else {
        for (let i = 2; i <= n; i++) {
            temp = a + b;
            a = b;
            b = temp;
        }
        return b;
    }
}
console.log(fibonacci(7)); // Output: 13
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(-1));
