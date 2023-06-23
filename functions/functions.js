// 1.Write a function named multiply that takes two numbers as arguments and returns their product.
    
    function multiply(a,b) {
      return a*b;
    }
      var result = multiply(7,9);
      console.log(result);

// 2. Write a function named reverseString that takes a string as an argument and returns the reversed string.
   
    function reverseString(str) {
      let newString = "";
      for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
      return newString;
  }
    console.log(reverseString("Biryani"));

// 3.Write a function named isEven that takes a number as an argument and returns true if the number is even, and false if it is odd.

     function isEven(num) {
      if (num % 2 === 0) {
        return true;
     }else{
      return false;
     }
    }
     console.log(isEven(6));
     console.log(isEven(7));

// 4. Write a function named capitalize that takes a string as an argument and returns the string with the first letter of each word capitalized.

    function firstCapital(name) {
      let newString = "";
      let words = name.split(" ");
      for (let i = 0; i < words.length; i++) {
        newString += words[i][0].toUpperCase() + words[i].slice(1) + " ";

    }
    return newString;
  }
  console.log(firstCapital("durga prasad"));
      
// 5. Write a function named factorial that takes a number as an argument and returns the factorial of that number.

function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
}
  return result;
}
console.log(factorial(7));

// 6. Write a function named largestNumber that takes an array of numbers as an argument and returns the largest number in the array.
  
 function largestNumber(numbers) {
  let max = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
  }
 }
 return max;
}
console.log(largestNumber([9,7,3,2,6]));
console.log(largestNumber([-3, -1, -7, -2]));

// 7. Write a function named average that takes an array of numbers as an argument and returns the average of those numbers.
 
function average(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    }
    return sum / numbers.length;
}
console.log(average([9,7,3,2,6]));

// 8. Write a function named add that takes any number of arguments and returns their sum.

function add(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    }
    return sum;
  }
  console.log(add(9,7,3,2,6));

  // 9. Write a function named isPalindrome that takes a string as an argument and returns true if the string is a palindrome, and false if it is not.

  function isPalindrome(nameValue) {
    let strLength = nameValue.length;

    for (let i = 0; i < strLength / 2; i++) {
        if (nameValue[i] !== nameValue[strLength - i - 1]) {
            return false; 
        }
    }

    return true; 
}

console.log(isPalindrome("malayalam")); 
console.log(isPalindrome("hello"));

// 10. Write a function named sumOfSquares that takes an array of numbers as an argument and returns the sum of their squares.

function sumOfSquares(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i] * numbers[i];
    }
    return sum;
  }
    console.log(sumOfSquares([9,7,3,2,6]));

  

  


