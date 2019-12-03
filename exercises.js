const binarySearch = (array, target) => {
    let startIndex = 0
    let endIndex = array.length - 1
    while (startIndex <= endIndex) {
        // get the middle value of the array
        let middleIndex = Math.floor((startIndex + endIndex) / 2)
        // check if the target is middle value of the array 
        if (target === array[middleIndex]) {
            // if it is the middle value return it
            return console.log(`target was found at ${middleIndex} and the value is ${array[middleIndex]}`)
        }

        // if the value you seeks  greater than the middle value of the array search the right side
        if (target > array[middleIndex]) {
            console.log('searching right side of the array')
            // increase the start index as we are no longer concerned with items on the left
            startIndex = middleIndex + 1;
        }
        // if the value you seek  is less  than the middle value
        if (target < array[middleIndex]) {
            console.log('searching the left side of the array')
            // decrease  the start index as we are  no longer concerned with items on the right
            startIndex = middleIndex - 1;
        } else {
            console.log('not found in this iteration another iteration')
        }
    } // end of while loop
}

binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9,], 9)