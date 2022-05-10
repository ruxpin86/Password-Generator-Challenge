// Assignment Code
//variable that TARGETS button id "generate"
var generateBtn = document.querySelector("#generate");


// var passLength = prompt("Choose a desired password length between 8-128 characters")
// var lowerCase = confirm("Would you like to include lowercase letters?")
// var upperCase = confirm("Would you like to include upper case letters?")
// var numbers = confirm("Would you like to include numbers?")
// var speChars = confirm("Would you like to include special characters?")

// var lowLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
// var upLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// var passNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
// var specials = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var lowLetters = "abcdefghijklmnopqrstuvwxyz"
var upLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var passNumber = "1234567890"
var specials = "!@#$%^&*()-=_+"

function generatePassword() {
  // ask user to dictate password length
  var passLength = prompt("Choose a desired password length between 8-128 characters")
  console.log(passLength)
  // if user chooses a password length outside of the needed value this forces them to choose an acceptable value
  while (passLength < 8 || passLength > 128) {
    passLength = prompt("Please re-enter a valid password length between 8-128 characters.")
    console.log(passLength)
  }
  // confirms if they want lowercase letters
  var lowerCase = confirm("Would you like to include lowercase letters?")
  console.log(lowerCase)
  // confirms if they want uppercase letters
  var upperCase = confirm("Would you like to include upper case letters?")
  console.log(upperCase)
  // confirms if they want numbers
  var numbers = confirm("Would you like to include numbers?")
  console.log(numbers)
  // confirms if they want special characters
  var speChars = confirm("Would you like to include special characters?")
  console.log(speChars)

  // if the user makes to decisions above this will force them to choose at least one category of character
  while (!lowerCase && !upperCase && !numbers && !speChars) {
    alert("You must choose at least one category of character to generate a password")
    lowerCase = confirm("Would you like to include lowercase letters?")
    upperCase = confirm("Would you like to include upper case letters?")
    numbers = confirm("Would you like to include numbers?")
    speChars = confirm("Would you like to include special characters?")
  }
  // declares an empty string value that can be populated based upon the users above choices
  var passArray = ""

  // if the user said 'ok' to any above parameter this concatenates that string with the other chosen strings
  if (lowerCase == true) {
    passArray = passArray.concat(lowLetters);
  }
  console.log(passArray)
  if (upperCase == true) {
    passArray = passArray.concat(upLetters);
  }
  console.log(passArray)
  if (numbers == true) {
    passArray = passArray.concat(passNumber);
  }
  console.log(passArray)
  if (speChars == true) {
    passArray = passArray.concat(specials);
  }
  console.log(passArray)

  var finalPass = ""
  var passAmount = parseInt(passLength)
  for (var i = 0; i < passAmount; i++) {
    var randIndex = Math.floor(Math.random() * passArray.length);
    finalPass += passArray[randIndex];

  }
  return finalPass
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password")

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

