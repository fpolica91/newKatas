
const isPalindrome = str =>{
  // meaning if all the test and it gets to 0 or 1 return true
  // this is our base case, it only returns when the condition is met
  // BASE CASE
  if(str.length <=1){
    return true
  }
  // BASE CASE
  // start checking the last and the first letter of the word
  //example racecar "r" -> "r" true we move on
  //remember there is no for loop

// 
  let [firstletter] = str  
  let lastLetter = str[str.length -1]
  // this is our test test case
  // example word racecar 
  // first time words are . r - r 
  // second time words are a -a 
  // third time wordsa are c-c
  // e - is the middle . letter, meeting our condition, hence return true
  if(firstletter === lastLetter){
    console.log(firstletter, "_" , lastLetter)
    let stringWithoutFirstAndLast  = str.substring(1, str.length -1)
    // recursion continue until our base case is done
    return isPalindrome(stringWithoutFirstAndLast)
    // function will be called util str.length == 1 or 0
  }else{
    // if 1 is never 1 or 0 return false
    return false
  }
}