const browserName = "Chrome";

function getBrowserName() {
  if (browserName === "Chrome") {

    let browserName = "Local Chrome";

    console.log("Inside function, browser name is:", browserName);
  }
  console.log("outside function, browser name is : ",browserName )
}


getBrowserName();