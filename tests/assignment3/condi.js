function launchBrowser(browserName)
{
    if(browserName==='Chrome')
    {
        console.log("This is chrome browser");
    }
    else if(browserName==='Firefox')
    {
        console.log("This is Firefox browser");
    }
    else
    {
        console.log(browserName);
    }
}

function testType(type)
{
    switch(type)
    {
    case "smoke":
        console.log("This is smoke test")
        break;
    case "sanity":
         console.log("This is sanity test") 
         break;  
    case "regression":
         console.log("This is regression test")
         break;    
    default:
         console.log("This is default test")        
}
}
launchBrowser("Chrome")
testType("regression")