const sortingBubbles = (arr, n =arr.length) =>{
  if(n ===1){
    return arr
  }
  for(let i =0; i < arr.length; i++){
    if(arr[i] > arr[i+1]){
      [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
    }
  }
  return sortingBubbles(arr, n-1)
}


const sortWhile =(arr) =>{
  let len = arr.length
      let flag;
  do{
    flag = false
    for(let i =0; i < len; i++){
      if(arr[i] > arr[i+1]){
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
        flag = true
      }
    }

  }while(flag){
    return arr
  }
}