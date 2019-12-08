









// const isPalindrome =(s)=>{
//   if(s.length <=1){
//     return true
//   }
//   // check first and last letter
//   let [firstLetter] = s
//   let lastLetter = s[s.length-1]
//   if(firstLetter === lastLetter){
//     // substring returns the middle between the first char and the last one
//     let minusFirstandLast = s.substring(1, s.length-1)
//     return isPalindrome(minusFirstandLast)
//   }else{
//     return false
//   }

// }

// const sum = (arr) =>{
//   if(arr.length === 0){
//     return 0
//   }else{
//     // let [head, ...tail] = arr
//     // return head + sum(tail)
//     return arr[0] + sum(arr.slice(1))
//   }
// }


// const reverseString = (s) => s? reverseString(s.substr(1)) + s.charAt(0): s

// const inOrder =(num, n = num.length) =>{
//   // return when the length reaches one
//   if(n===1){
//     return num
//   }
//   for(let i =0; i < n; i++){
//     if(num[i] > num[i+1]){
//       [num[i], num[i+1]] = [num[i+1], num[i]]
//     }
//   }
//   return inOrder(num, n-1)

// }


// const inOrder =(num) =>{
//   let len = num.length
//   let flag
//   do {
//     flag = false
//     for(let i =0; i < len; i++){
//       if(num[i] > num[i+1]){
//         let temp = num[i]
//         num[i] = num[i+1]
//         num[i+1] = temp
//         flag = true
//       }
//     }

//   }while(flag){
//     return num
//   }

// }


