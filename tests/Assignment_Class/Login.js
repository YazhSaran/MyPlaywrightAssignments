"use strict";
class LoginTest {
    browserName = "chrome";
    password = "admin123";
    username = "tester";
    openApplication() {
        console.log("OpenApplication");
    }
    login() {
        console.log("Password " + this.password);
        console.log("User Name " + this.username);
    }
}
let objLog1 = new LoginTest();
objLog1.openApplication();
objLog1.login();
