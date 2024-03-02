let digitalCounter = 0;

function increase(){
    let x = document.getElementById("increase");
    let y = document.getElementById("counter")
    y.innerHTML = digitalCounter+=1
}


function decrease(){
    let x = document.getElementById("decrease");
    let y = document.getElementById("counter")
    y.innerHTML = digitalCounter-=1
}


function reset(){
    let x = document.getElementById("reset");
    let y = document.getElementById("counter")
    y.innerHTML = digitalCounter-=digitalCounter
}


