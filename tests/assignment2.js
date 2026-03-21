function isOddOrEven(num)
{
    if(num%2===0)
    {
        console.log("Number is Even number " +num);
        
    }
    else
    {
        console.log("Number is odd number "+num);
    }

}


//isOddOrEven(1);
function numberType(number)
{
    if(number >0)
    {
        console.log("It is a positive number")
    }
    else if(number < 0)
    {
        console.log("It is negative number ")
    }
    else
        console.log("The Number is 0");
        
}

// numberType(4)
// numberType(-40)
// numberType(0)

let genderType='Female'
function printGender()
{
    let color='brown'
    if(genderType==='Female')
    {
        var age=30
        let color='pink'
        console.log(color);        
    }
    console.log(age);

}
printGender()
console.log(genderType)