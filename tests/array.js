let num=[56,78,90,23,90,76,43,56]
let duplicate=[]
for(let i=0;i<num.length;i++)
{
    for (let j=i+1;j<num.length;j++)
    {
        if(num[i]===num[j])
            {
                duplicate.push(num[i]);
                break;
            }
        
    }
}

for(let j of duplicate)
{
    console.log(j);
    
}