const sum =(arr) =>{
// this is the base case
// when arr.length is 0 return 
if(arr.length ===0){
  return 0
}else{

  console.log(arr.slice(1))
  console.log(arr[0])
// first time 
//sum([1, 2, 3, 4, 5]) = 1 + sum([2, 3, 4, 5])
// sum([1, 2, 3, 4, 5]) = 1 + (2 + sum([3, 4, 5]))
// sum([1, 2, 3, 4, 5]) = 1 + (2 + (3 + sum([4, 5])))
// sum([1, 2, 3, 4, 5]) = 1 + (2 + (3 + (4 + sum([5]))))
// sum([1, 2, 3, 4, 5]) = 1 + (2 + (3 + (4 + (5 + sum([])))))
// WHEN THE ARRAY LENGTH IS 0 RETURN 0 AND 0 GETS ADDED TO THE TOTAL RESULT
// sum([1, 2, 3, 4, 5]) = 1 + (2 + (3 + (4 + (5 + 0))))
  return arr[0] + sumWithRecursion(arr.slice(1))
}
}



// sumWithRecursion([1,3,4,5,9])


const recusionNoSlice =(arr) =>{
  // because of the conditional this function will execute until the array length is 0
  // this zero will be added once the entire array is consumed 
  if(arr.length ===0){
    return 0
  }else{
    // takes first element and reminder of array( 1 [ 2, 5, 6, 7 ])
    let [head, ...tail] = arr
    return head + sumNoRecusion(tail)
  }

}
