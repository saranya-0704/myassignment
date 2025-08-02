let browser ='Chrome';

function checkBrowserVersion (callback) {
        setTimeout(() => {
            callback(browser)
        }, 2000);
}
function callback(version){
    console.log("browser version is" , version);
    
}

checkBrowserVersion(callback);