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

const reverseString=(s) => s?reverseString(s.substr(1)) + s.charAt(0): s