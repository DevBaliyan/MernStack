let sec=0, min=0, hr=0;
let timestamp=0;

function updateTimer(){
    timestamp += 1
    sec = parseInt(document.getElementById('sec').innerText);
    min = parseInt(document.getElementById('min').innerText);
    hr = parseInt(document.getElementById('hr').innerText);
    sec += 1
    if (sec==60){
        sec = 0; min++;
    }
    if(min==60){
        min=0;
        hr++;
    }
    
    document.getElementById('sec').innerText = sec;
    document.getElementById('min').innerText = min;
    document.getElementById('hr').innerText = hr;

    console.log(sec, min, hr, typeof(sec));
}

setInterval(updateTimer, 1000);
