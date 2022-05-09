// Assignment Code
//variable that TARGETS button id "generate"
var generateBtn = document.querySelector("#generate");


// var passLength = prompt("Choose a desired password length between 8-128 characters")
// var lowerCase = confirm("Would you like to include lowercase letters?")
// var upperCase = confirm("Would you like to include upper case letters?")
// var numbers = confirm("Would you like to include numbers?")
// var speChars = confirm("Would you like to include special characters?")

// var lowLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
// var upLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
// var passNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0,];
// var specials = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
var lowLetters = "abcdefghijklmnopqrstuvwxyz"
var upLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var passNumber = "1234567890"
var specials = "!@#$%^&*()-=_+"

function generatePassword() {
  var passLength = prompt("Choose a desired password length between 8-128 characters")
  console.log(passLength)
  while (passLength < 8 || passLength > 128) {
    passLength = prompt("Please re-enter a valid password length between 8-128 characters.")
    console.log(passLength)
  }
  var lowerCase = confirm("Would you like to include lowercase letters?")
  console.log(lowerCase)
  var upperCase = confirm("Would you like to include upper case letters?")
  console.log(upperCase)
  var numbers = confirm("Would you like to include numbers?")
  console.log(numbers)
  var speChars = confirm("Would you like to include special characters?")
  console.log(speChars)

  var passArray = ""

  if (lowerCase == true) {
    passArray = passArray.concat(lowLetters)
  }
  console.log(passArray)
  if (upperCase == true) {
    passArray = passArray.concat(upLetters)
  }
  console.log(passArray)
  if (numbers == true) {
    passArray = passArray.concat(passNumber)
  }
  console.log(passArray)
  if (speChars == true) {
    passArray = passArray.concat(specials)
  }
  console.log(passArray)

  var aPwd = ""
  var passFinal = passArray.length
  passLength = parseInt(passLength)
  for (var i = 0; i < passLength; i++) {
    aPwd += passArray.charAt(Math.floor(Math.random * passFinal))
    console.log(aPwd)
    console.log(passLength)
    return aPwd
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password")

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

