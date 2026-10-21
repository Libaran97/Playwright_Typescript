console.log("Program Started");
function Reverse(str : string){
    return str.split('').reverse().join('');
}

console.log(Reverse('Libby'));
console.log("Program Ended");

function ReverseAString(Str : String)
{
    for(let i=Str.length;i>=0;i--)
    {
        
        console.log(Str.charAt(i));
    }
}

ReverseAString("Libaran");

//vowels();