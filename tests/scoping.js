function scopeTest()
{
if(true)
{
    const a=10;
    console.log(a);
}
console.log("outside" + a);
}
scopeTest()
//console.log("outsidefunction" + a);