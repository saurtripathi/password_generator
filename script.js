



let input1 = document.getElementById("myInput1")
let input2 = document.getElementById("myInput2")
function clickAndCopy(attr1, attr2) {


  let copyText = document.getElementById(attr1);
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices


  navigator.clipboard.writeText(copyText.value);
  alert(copyText.value)
  document.getElementById(attr2).textContent = 'Copied'
}

function generatePassword() {
  input1.value = ""
  input2.value = ""
  let characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
    "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2",
    "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*",
    "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"]


  let random2 = Math.floor((Math.random() * characters.length))
  let pwd = ""

  for (let i = 0; i < 15; i++) {
    let random1 = Math.floor((Math.random() * characters.length))
    input1.value += characters[random1]
  }
  for (let i = 0; i < 15; i++) {
    let random2 = Math.floor((Math.random() * characters.length))
    input2.value += characters[random2]
  }

}






