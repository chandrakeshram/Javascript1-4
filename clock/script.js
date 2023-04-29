setInterval(()=>{
    let time = new Date();
    let htime = time.getHours();
    let mtime = time.getMinutes();
    let stime = time.getSeconds();
    console.log(htime+" : "+mtime+" : "+stime)
    let hrot= htime *30 + (mtime/2);
    let mrot =mtime *6;
    let srot = stime*6;

    document.getElementById('hour').style.transform=`rotate(${hrot}deg)`;
    document.getElementById('minute').style.transform=`rotate(${mrot}deg)`;

    document.getElementById('second').style.transform=`rotate(${srot}deg)`;



},1000);