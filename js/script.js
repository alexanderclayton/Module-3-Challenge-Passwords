// Assignment Code
var generateBtn = document.querySelector("#generate");

special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function writePassword() {
  var howMany = window.prompt("How many characters would you like your password to contain?");
  if (!howMany) {
    window.alert("Must enter a number between 8 and 128!");
    writePassword();
  } else if (howMany <8 || howMany > 128) {
    window.alert("Must enter a number between 8 and 128!");
    writePassword();
  } else {
    var confirmSpecial = window.confirm("Click OK to confirm including special characters");
    var confirmNumeric = window.confirm("Click OK to confirm including numeric characters");
    var confirmLowercase = window.confirm("Click OK to confirm including lowercase characters");
    var confirmUppercase = window.confirm("Click OK to confirm including uppercase characters");
  }
  if (!confirmSpecial && !confirmNumeric && !confirmLowercase && !confirmUppercase) {
    window.alert("Must select at least one character type!");
  }
  else if (confirmSpecial && confirmNumeric && confirmLowercase && confirmUppercase) {// S # L U
    window.alert("Your password will be " + howMany + " characters long and contain special characters, numbers, lowercase letters, and uppercase letters.")
    pword = special.concat(numeric, lowercase, uppercase);
  }
  else if (confirmSpecial && confirmNumeric && confirmLowercase) {// S # L
    window.alert("Your password will be " + howMany + " characters long and contain special characters, numbers, and lowercase letters.")
    pword = special.concat(numeric, lowercase);
  }
  else if (confirmSpecial && confirmNumeric && confirmUppercase) {// S # U
    window.alert("Your password will be " + howMany + " characters long and contain special characters, and uppercase letters.")
    pword = special.concat(numeric, uppercase);
  }
  else if (confirmSpecial && confirmLowercase && confirmUppercase) {// S L U
    window.alert("Your password will be " + howMany + " characters long and contain special characters, lowercase letters, and uppercase letters.")
    pword = special.concat(lowercase, uppercase);
  }
  else if (confirmSpecial && confirmNumeric) {// S #
    window.alert("Your password will be " + howMany + " characters long and contain special characters and numbers.")
    pword = special.concat(numeric)
  }
  else if (confirmSpecial && confirmLowercase) {// S L
    window.alert("Your password will be " + howMany + " characters long and contain special characters and lowercase letters.")
    pword = special.concat(lowercase);
  }
  else if (confirmSpecial && confirmUppercase) {// S U
    window.alert("Your password will be " + howMany + " characters long and contain special characters and uppercase letters.")
    pword = special.concat(uppercase);
  }
  else if (confirmSpecial) {// S
    window.alert("Your password will be " + howMany + " characters long and contain special characters.")
    pword = special;
  }
  else if (confirmNumeric && confirmLowercase && confirmUppercase) {// # L U
    window.alert("Your password will be " + howMany + " characters long and contain numbers, lowercase letters, and uppercase letters.")
    pword = numeric.concat(lowercase, uppercase);
  }
  else if (confirmNumeric && confirmLowercase) {// # L
    window.alert("Your password will be " + howMany + " characters long and contain numbers and lowercase letters.")
    pword = numeric.concat(lowercase);
  }
  else if (confirmNumeric && confirmUppercase) {// # U
    window.alert("Your password will be " + howMany + " characters long and contain numbers and uppercase letters.")
    pword = numeric.concat(uppercase);
  }
  else if (confirmNumeric) {// #
    window.alert("Your password will be " + howMany + " characters long and contain numbers.")
    pword = numeric;
  }
  else if (confirmLowercase && confirmUppercase) {// L U
    window.alert("Your password will be " + howMany + " characters long and contain lowercase letters and uppercase letters.")
    pword = lowercase.concat(uppercase);
  }
  else if (confirmLowercase) {// L
    window.alert("Your password will be " + howMany + " characters long and contain lowercase letters.")
    pword = lowercase;
  }
  else if (confirmUppercase) {// U
    window.alert("Your password will be " + howMany + " characters long and contain uppercase letters.")
    pword = uppercase;
  }

  var pass = [];

  for (var i = 0; i < howMany; i++) {
    var generatePassword = pword[Math.floor(Math.random() * pword.length)];
    pass.push(generatePassword);

  }
// Write password to the #password input
  var passwordText = document.querySelector("#password");
  
  passwordText.value = pass.join("");
} 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
