

const hexInput = document.getElementById("hexInput");
const inputColor = document.getElementById("inputColor")

hexInput.addEventListener('keyup', () => {
  const hex = hexInput.value;
   if(!isValidHex(hex)) return;

   const strippedHex = hex.replace('#','')

   inputColor.style.backgroundColor = "#" + strippedHex;
})


const isValidHex = (hex) => {
  if(!hex) return false

  const strippedHex = hex.replace('#','')
  return strippedHex.length === 3 || strippedHex.length === 6
}

console.log(isValidHex("#000000")) //true
console.log(isValidHex("#0000000")) //false
console.log(isValidHex("#ffffff")) //true
console.log(isValidHex("#fff")) //true
console.log(isValidHex("fff")) //true
console.log(isValidHex("ac")) //false