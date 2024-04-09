var seconds = 0;
var minutes = 0;
var hours = 0;
var dispseconds = document.querySelector("#p3");
var dispminutes = document.querySelector("#p2");
var disphours = document.querySelector("#p1");
var interval;
function timer(){
    seconds++;
    if(seconds<=9){
        dispseconds.innerText = "0"+seconds;
    }
    if(seconds>9 && seconds <60){
        dispseconds.innerText = seconds;
    }
    if(seconds>59){
        minutes++;
        seconds = 0;
        dispseconds.innerText = "0"+seconds;
        if(minutes<=9){
            dispminutes.innerText = "0"+minutes;
        }
        if(minutes>9 && minutes<59){
            dispminutes.innerText = minutes;
        }
        if(minutes>59){
            hours++;
            minutes=0;
            dispminutes.innerText = "0"+minutes;
            if(hours<=9){
                disphours.innerText = "0"+hours;
            }
            if(hours>9){
                disphours.innerText = hours;
            }
        }
    }
}
function btn1(){
    interval = setInterval(timer,1000);
    document.querySelector("#btn1").disabled = true;
}
function btn2(){
    clearInterval(interval);
    dispseconds.innerText = "00";
    dispminutes.innerText = "00";
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.querySelector("#btn1").disabled = false;
}
function btn3(){
    let disp = document.createElement("div");
    let text = "";
    if(seconds<=9 && minutes<=9 && hours<=9){
        text = "0" + hours + ":" + "0" + minutes + ":" + "0" + seconds;
    }
    else if(seconds>9 && minutes<=9 && hours<=9){
        text = "0" + hours + ":" + "0" + minutes + ":" + seconds;
    }
    else if(seconds<=9 && minutes>9 && hours<=9){
        text = "0" + hours + ":" + minutes + ":" + "0" + seconds;
    }
    else if(seconds>9 && minutes>9 && hours<=9){
        text = "0" + hours + ":" + minutes + ":" + seconds;
    }
    else if(seconds<=9 && minutes<=9 && hours>9){
        text = hours + ":" + "0" + minutes + ":" + "0" + seconds;
    }
    else if(seconds<=9 && minutes>9 && hours>9){
        text = hours + ":" + minutes + ":" + seconds;
    }
    else if(seconds>9 && minutes>9 && hours>9){
        text = hours + ":" + minutes + ":" + seconds;
    }
    let node = document.createTextNode(text);
    disp.append(node);
    let element = document.querySelector("#container3");
    element.appendChild(disp);
    disp.classList.add("p5");
}