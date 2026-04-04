enum environment {
LOCAL="QA",
DEVELOPMENT="DEV",
STAGING="UAT",
PRODUCTION="PROD"

}

function runTests(env:environment):void{
    console.log("Running in the environment "+env)
}

runTests(environment.STAGING);
runTests(environment.DEVELOPMENT);