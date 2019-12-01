const fibonacciSequence = (number) => {
    let fib = [0, 1]
    for (let i = fib.length - 1; fib.length < number; i++) {
        fib.push(fib[i] + fib[i - 1])
    }
    return fib
}