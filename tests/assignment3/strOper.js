let s = "Hello World"
const wrd=s.split(" ");
console.log("The last word is "+wrd[wrd.length-1]+" and the length is "+wrd[wrd.length-1].length)
let s1 =  " fly me to the moon "
const str1=s1.trim()
const wrd1=str1.split(" ");
console.log("The last word is "+wrd1[wrd1.length-1]+" and the length is "+wrd1[wrd1.length-1].length)

function isAnagram(str1,str2)
{
    let strOut1=str1.toLowerCase()
                .split("")
                .sort()
                .join("");
     let strOut2=str2.toLowerCase()
                .split("")
                .sort()
                .join("");   
      if(strOut1===strOut2)   
        {
            console.log("Given Strings are anagram")
        }  
        else{
            console.log("Given Strings are not anagram")
        }              
    
}

isAnagram('listen', 'slent')