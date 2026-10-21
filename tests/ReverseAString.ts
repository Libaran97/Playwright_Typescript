console.log("Program Started");
function ReverseAString(str : string){
    return str.split('').reverse().join('');
}

console.log(ReverseAString('Libby'));
console.log("Program Ended");


function vowels(){
    let vowels = "automation";
    for(let ch of vowels){
        if('aeiou'.includes(ch)){
            console.log(ch)
        }
    }
}

vowels();