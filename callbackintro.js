//Synchronous Programming
/*let a = prompt("Enter your name");
let b = prompt("Enter your age");
let c = prompt("Enter your marks");
console.log(`${a} has ${b} age and has marks i.e ${c}`);*/

//Asynchronous Programming 
console.log("Start");  
setTimeout(()=>{
    console.log("Timer has started");   //This process has scheduled
},3000);
console.log("End"); //Though it is written later in code still it will be executed first since above process is scheduled.


//Callback

function loadScript(src, tp){
    let script= document.createElement('script');
    script.src = src;
    script.onload=()=>{
        console.log("SRC "+script.src +" loaded successfully");
        tp(null, src);
    }
    document.body.append(script);
    script.onerror=()=>{
        console.error("SRC"+script.src +"cannot be loaded due to some error");
        tp(new Error("Hey this is new error"));
    }
}
const tp = (error, source)=>{
    if(error){
        console.error(error);
    }
    console.log("Hey, I am Time Pass function "+source);
}

const original = (url, callback)=>{
    let script1= document.createElement('script');
    script1.src = url;
    script1.onload=()=>{
        console.log("Script with URL "+url+" loaded successfully");
        callback(null, url);
    }
    script1.onerror=()=>{
        console.error("Script with URL "+url+" did not loaded successfully");
        callback(new Error("Error is occurred"));
    }
    document.body.append(script1);

}
const timpass=(error,url)=>{
    if(error){
        console.error(error);
    }else{
    console.log("Hum to hokar rahenge" ,url);}
}
original('https://cdn.jsdelivr.net/njkjkjhpm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js',timpass)
// loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js',tp);
