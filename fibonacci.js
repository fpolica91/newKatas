const fibonacciSequence = (number) => {
    let fib = [0, 1]
    for (let i = fib.length - 1; fib.length < number; i++) {
        fib.push(fib[i] + fib[i - 1])
    }
    return fib
}

const fibRecursive = (number) => {
    console.log(`the current number is ${number}`)
    if (number === 1) {
        return [0, 1]
    } else {
        let fib = fibRecursive(number - 1)
        fib.push(fib[fib.length - 1] + fib[fib.length - 2])
        return fib
    }
}