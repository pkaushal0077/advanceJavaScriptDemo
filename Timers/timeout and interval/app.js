function startCountdown (duration){
    let secondRemaining = duration;
    const h1 = document.getElementById("timer")
    h1.innerText = secondRemaining;
    secondRemaining--;
   const intervalId = setInterval(function (){
        h1.innerText = secondRemaining;
        secondRemaining--;
        if(secondRemaining < 0){
            clearInterval(intervalId)
            h1.innerText ="Time is up!"
        }
    },1000);
}

//setTimeout and clearTimeout()

const cancelButton = document.querySelector("#cancelRedirection")

const timeoutId = setTimeout(()=>{
    window.location.href = "http://www.google.com"
},5000);
cancelButton.addEventListener("click",()=>{
    clearInterval(timeoutId)
    console.log("aborated redirection")
})
