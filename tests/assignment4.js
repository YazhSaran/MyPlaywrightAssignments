let browser = "Chrome";
function version(browser)
{
    console.log("Browser version is " + browser);

}

function checkBrowserVersion(callback)
{
    setTimeout(()=>{
        callback(browser)},2000);    

}

checkBrowserVersion(version);