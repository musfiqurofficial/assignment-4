// Problem 2:  isJavaScriptFile 

function isJavaScriptFile(fileName) {
    const fileNameCheck = fileName.endsWith('.js');
    if (fileNameCheck) {
        return true;
    } else {
        return false;
    }
}