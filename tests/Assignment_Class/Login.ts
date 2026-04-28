class LoginTest
{
    public browserName:string="chrome";
    private password:string="admin123";
    protected username:string="tester";
public openApplication()
{
console.log("OpenApplication")
}
public login()
{
 console.log("Password "+this.password)
 console.log("User Name "+this.username)
}
}

let objLog1=new LoginTest();
objLog1.openApplication();
objLog1.login();
