const reverseString =(string) =>{
  if(string === "") {
    return ""
  } 
  else{
    // return  reverseString(string.substr(1)) + string.charAt(0)
    // this reverses the order of the words
      // this reverses the word iteself
      console.log(`this is the substr   ${string.substr(1)}`)
      console.log("===================")
      console.log(string.charAt(0))
      return reverseString(string.substr(1)) + string.charAt(0)
       
  }
  
}
