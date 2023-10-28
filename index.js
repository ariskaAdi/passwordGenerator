let passwordLength = document.getElementById("passwordLength");
let password = document.getElementById("password");
let saveButton = document.getElementById("saveButton");

function generatePassword(len) {
  const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const number = "01234556789";
  const symbol = "~!@#$%^&*()";

  const data = lowerAlphabet + upperAlphabet + number + symbol;
  let generator = " ";
  for (let index = 0; index < len; index++) {
    generator += data[~~(Math.random() * data.length)];
  }
  return generator;
  //   console.log("generator: ", generator);
}
function getPassword() {
  const newPassword = generatePassword(passwordLength.value);
  password.value = newPassword;
  //   alert("password has been generated!");
}
const savePassword = () => {
  document.title = password.value;
  saveButton.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(`password: ${document.title}`));
  saveButton.setAttribute("download", "MyPasswordGeneratorLOG.txt");
};
