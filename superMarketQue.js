const queueTime = (customers, registers) => {
    resultsArr = []
    if (registers === 0) {
        return 0
    } else {
        let reg = queueTime(0, registers - 1)
        resultsArr.push(0)
        for (let i = 0; i < customers.length; i++) {
            resultsArr[0] += customers[i]
            resultsArr.sort()
        }
    }
    return resultsArr[resultsArr.length - 1]
}

queueTime([1,3,4,5],2)