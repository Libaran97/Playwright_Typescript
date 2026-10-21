
function duplicate()
{
    let arr = [1,4,6,7,3,7,3,5];
    let set = new Set<number>();
    for(let ch of arr)
    {
        if(set.has(ch))
        {
            console.log("Duplicates : ",ch);
        }
        else{
            set.add(ch);
        }
    }
}

duplicate();


function duplicate1()
{
    let set = new Set<String>();
    let res="";
    let str="Libaran"
    for(let i=0;i<str.length;i++)
    {
  
        if(set.has(str.charAt(i)))
        {
            res=res+str.charAt(i)+" ";
        }
        else{
            set.add(str.charAt(i));
        }
    }
    console.log("Duplicates",res);
}
duplicate1();