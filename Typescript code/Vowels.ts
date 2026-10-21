

function vowels(str : String)
{
    let res="";
    
    for(let ch of str)
    {
        if('aeiou'.includes(ch))
        {
            res = res + ch+" ";
        }
    }
    return res;
}

console.log(vowels("Automation"));