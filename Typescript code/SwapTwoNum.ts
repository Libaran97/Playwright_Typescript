

function Swaptwonum(int1:number,int2:number)
{
    console.log("initial value of a",int1);
    console.log("initial value of b",int2);
    int1 = int1+int2;
    int2 = int1-int2;
    int1=int1-int2;
    console.log("value of a",int1);
    console.log("value of b",int2);
}

Swaptwonum(36,5);

