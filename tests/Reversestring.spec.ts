const {test,expect}=require('@playwright/test')
test ('reversestring',async({page})=>{

let str="hello";
let reversed=str.split('').reverse().join('');
console.log(reversed)
    
    }
)
function reverseString(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}

console.log(reverseString("Vijay"));


let a = 10;
let b = 20;

[a, b] = [b, a];

console.log("a =", a); // 20
console.log("b =", b); // 10

let str = "Hello World";
let hasVowel = false;

str = str.toLowerCase();

for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (ch === 'a' || ch === 'e' || ch === 'i' ||
        ch === 'o' || ch === 'u') {
        hasVowel = true;
        break;
    }
}

if (hasVowel) {
    console.log("Vowel is present in the string.");
} else {
    console.log("No vowel found in the string.");
}