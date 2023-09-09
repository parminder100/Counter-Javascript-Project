const counterElement = document.querySelector(".counter-number");
const followersElement = document.querySelector(".followers");

let count = 1;

setInterval(()=>{
    if(count <1000){
        count++;
        counterElement.textContent = count;
    }
}, 1);


setTimeout(()=>{
    followersElement.style.display = "block";
},4240);