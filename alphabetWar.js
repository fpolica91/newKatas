const alphabetWar = (fight) => {
    const left = {
        w: 4,
        p: 3,
        b: 2,
        s: 1
    }

    const right = {
        m: 4,
        q: 3,
        d: 2,
        z: 1
    }
    let left_counter = 0
    let right_counter = 0

    for (let i = 0; i < fight.length; i++) {
        let word = fight[i]
        if (left[word]) {
            left_counter += left[word]
        }
        if (right[word]) {
            right_counter += right[word]
        }
        return left_counter
    }
}

alphabetWar("zdqmwpbs")