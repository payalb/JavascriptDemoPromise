const log = require("./logger")
const underscore= require("underscore")
function x(data){
    return new Promise((resolve, reject )=>{
        if(data === true){
            resolve("success");
        }else{
            reject("failed");
        }
    });
}

log.printMessage(log.a);
x(true).then((y)=> {log.printMessage("1st time" +y); return x(true);}).then(z=> log.printMessage("second time "+z));
