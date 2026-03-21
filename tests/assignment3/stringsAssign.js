function revString(str1)
{
    let revStr="";
    for(let i=str1.length-1;i>=0;i--)
    {
        revStr+=str1[i]
    }
    console.log(revStr);
    return revStr;
}

revString("saran");

function checkPalindrome(stringVal)
{
    let revStringVal=revString(stringVal)
    let result=(revStringVal===stringVal)?"Palindrome":"not palindrome"
    console.log(result)
}

checkPalindrome("madam")