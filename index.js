const uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const lowercase =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]


const checkUppercase = document.getElementById("check-Uppercase")
const checkLowercase = document.getElementById("check-Lowercase")
const checkSymbols = document.getElementById("check-Symbols")
const checkNumbers = document.getElementById("check-Numbers")
const lengthVal = document.getElementById("length-val")
const lengthEl = document.getElementById("length")
const strengthPass = document.getElementById("pass-strength")
let passwordLength = 12
let myPassword =""
let typePassword =[]
let passStrength = 0


/*
- password length untuk menentukan jumlah password
- ada fungsi uppercase, lowercase, symbol, dan numbers -->  apabila button diclick nnti array masuk ke pass random
- ada fungsi random yang dipanggil ketika generate password
- ada fungsi copy password yang dipanggil ketika click copy password
- ada fungsi password strength
- misal untuk password length 12

*/

 lengthEl.addEventListener('input', () => {
      lengthVal.textContent = lengthEl.value;
    });

function genUppercase(){
    if(checkUppercase.checked){
    typePassword.push(uppercase) //memasukkan tipe password ke array
    }
    else{
    typePassword = typePassword.filter(item => item !== uppercase)
    }
}

function genLowerCase(){
    if(checkLowercase.checked){
    typePassword.push(lowercase)
    }
    else{
    typePassword = typePassword.filter(item => item !== lowercase)
    }
}

function genSymbols(){
    if(checkSymbols.checked){
    typePassword.push(symbols)
    }
    else{
    typePassword = typePassword.filter(item => item !== symbols)
    }
}

function genNumbers(){
    if(checkNumbers.checked){
    typePassword.push(numbers)
    }
    else{
    typePassword = typePassword.filter(item => item !== numbers)
    }
}


function genPass(){
    passStrength = 0
    if(typePassword.length>0){
    myPassword = ""
    const lengthPass = +lengthEl.value
    for(let i=0; i<lengthPass; i++){
    const type = typePassword[getRandomIndex(typePassword)]
    const char = type[getRandomIndex(type)]
    myPassword += char
    }
    outputPassword(myPassword)
    checkStrength(myPassword)
    }
    else{
        alert("Check the Box")
    }
}


function getRandomIndex(array){
    return Math.floor(Math.random()*array.length)
}

function outputPassword(displayPassword){
    document.getElementById("output-pass").textContent = displayPassword
}

function copyButton(){
    const text = document.getElementById("output-pass").textContent
    navigator.clipboard.writeText(text).then(() => {
    alert("Password copied to clipboard!")})
}

function checkStrength(password){
    passStrength = typePassword.length
    if (myPassword.length > 15){
        passStrength++
    }
    if (passStrength == 5){
        strengthPass.textContent = `Password Strength: Very Stong`
    }
    else if (passStrength == 4){
        strengthPass.textContent = `Password Strength: Strong`
    }
    else if (passStrength == 3){
        strengthPass.textContent = `Password Strength: Moderat`
    }
    else if (passStrength == 2){
        strengthPass.textContent = `Password Strength: Weak`
    }
    else {
        strengthPass.textContent = `Password Strength: Very Weak`
    }
}