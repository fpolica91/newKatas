




const reverseString=(s) => s?reverseString(s.substr(1)) + s.charAt(0): s

reverseString('hello  world marica')