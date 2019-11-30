// SERIES SUM USING RECURSION NO FOR LOOP

function seriesSum(n) {
    console.log(`N currently is ${n}`)
    num = 1
    top = 1
    base = 1
    if (n <= 0) {
        return "0.00"
    } else if (n == 1) {
        return "1.00"
    } else {
        seriesSum(n - 1)
        num += 3
    }
    return (base += (top / num)).toFixed(2)
}

// BETTER 0 NOTATION