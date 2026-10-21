

function SecondLargestarr(arr : number[]) : number
{
    let Highest = -Infinity;
    let SecondHighest = -Infinity;
    for(let i = 0;i<arr.length;i++)
    {
        const num = arr[i]!;
        if(num>Highest)
        {
            SecondHighest = Highest;
            Highest = num;
        }
        else if(num>SecondHighest && num!==Highest)
        {
            SecondHighest = num;
        }
    }
    return SecondHighest;
}

console.log(SecondLargestarr([1,5,7,9,5,8,12,9,4,10,2,11]));


function secondlargest()
{

    let arr=[1,3,45,6,7,8,4,3,34];
    let Highest=-Infinity;
    let secondlargest=-Infinity;

    
    for(let i=0;i<arr.length;i++)
    {
        let num=arr[i]!;
        if(num>Highest)
        {
            secondlargest=Highest;
            Highest=num;
        }
        else if(num>secondlargest&& num!==Highest)
        {
            secondlargest=num;
        }
    }
    console.log("second highest :",secondlargest);
}

secondlargest();