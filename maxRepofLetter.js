const max = string =>{
const characters ={}
  for(let char of string){
    characters[char] = characters[char] + 1 || 1
  }
  let maxCount =0
  let maxChar = null;

  for(let character in characters){
    if(characters[character] > maxCount){
      maxCount = characters[character]
      maxChar = character
    }
  }
  return maxChar
}
