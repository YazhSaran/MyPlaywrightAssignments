"use strict";
var environment;
(function (environment) {
    environment["LOCAL"] = "QA";
    environment["DEVELOPMENT"] = "DEV";
    environment["STAGING"] = "UAT";
    environment["PRODUCTION"] = "PROD";
})(environment || (environment = {}));
function runTests(env) {
    console.log("Running in the environment " + env);
}
runTests(environment.STAGING);
runTests(environment.DEVELOPMENT);
