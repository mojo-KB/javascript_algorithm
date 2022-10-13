// An example of exponential algorithm

const fib = (n) => {
// Recussive fibonacci function 
// T(n) = T(n-1) + T(n-2) + 3 for n > 1
    if (n === 0) return 0;
    if (n === 1) return 1;
    return (fib(n-1) + fib(n-2))
}

console.log(fib(6)) // expected output of 8 (6th index)

// An example of a polynomial algorithm

const fib2 = (n) => {
    if (n === 0) return 0
    const f = [];
    f[0] = 0
    f[1] = 1
    for(let i = 2; i <= n; i++) {
        f[i] = f[i-1] + f[i-2]
    }
    return f[n]
}



console.log(fib2(7)) // expected output of 13 (7th index)