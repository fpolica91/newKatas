

const factorial = (num) =>{
  return num <2 ? 1: num * factorial(num-1)
}

factorial(3)

// a factorial is expressed the following way
// n! example 5! = 5 * 4 * 3* 2 * 1 