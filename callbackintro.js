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
    document.body.append(script);
    console.log("SRC "+script.src +" loaded successfully");
    tp(src);
}
const tp = (source)=>{
    console.log("Hey, I am Time Pass function "+source);
}
loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js',tp);
