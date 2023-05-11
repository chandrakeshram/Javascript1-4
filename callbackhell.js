const scriptLoader=(url1, url2,callback)=>{
    let script = document.createElement('script');
    let style = document.createElement('style');
    script.src=url1;
    
    document.body.append(script);
    document.body.append(style);
    script.onload=()=>{
        console.log("Style and Script loaded successfully Style : "+url2+" Script : "+url1);
        callback(null);
    }
    style.onerror=()=>{
        console.error("Error occured during loading style "+url2);
        callback(new Error("Error aagya dekhlo bhai"));
    }
}

const tp =(error)=>{
    if(error){
        console.error(error);
        return;
    }
    console.log("Dekhte hum hote ki nahi");
}

scriptLoader('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js','https://cn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css',tp)
