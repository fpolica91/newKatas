

const factorial = (num) =>{
  return num <2 ? 1: num * factorial(num-1)
}

factorial(3)