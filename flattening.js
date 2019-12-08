const flatteningWithReduce =(arr, depth, currentDepth =0) =>{
  if(currentDepth === depth){
    return array
  }
  return arr.reduce((acc,item) =>{
    return acc.concat(
      Array.isArray(item) ? flatteningWithReduce(item, depth, currentDepth+1): item
    )
  },[])
}

