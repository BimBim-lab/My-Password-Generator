const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 12
let outputOne = document.getElementById("output-one")
let outputTwo = document.getElementById("output-two")


function genPiss(){
    let password = ""
    for(let i = 0; i <= 12; i++){
    password += characters[Math.floor(Math.random() * characters.length)]
    }
    return password
}

function genPass(){
    outputOne.textContent = genPiss()
    outputTwo.textContent = genPiss()
}



