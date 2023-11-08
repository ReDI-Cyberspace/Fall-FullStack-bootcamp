var finishedText = 'Countdown complete!';

document.getElementById('startButton').addEventListener('click', function(){
    setTime(countInput);
});
function setTime(countInput){

    if(localStorage.getItem('countInput') = null){
        // Retrieve user's input and then store it
        var countDownStart = document.getElementById('countInput');
        // Save Data to Local Storage
        localStorage.setItem('lastInput',countDownStart);
    }else{
        // Read Data from Local Storage
        let countDownStart = localStorage.getItem('countInput');
    }
    let timer = setInterval(function(){
        console.log(countDownStart);
        countDownStart--;

        if(countDownStart < 0){
            clearInterval(timer);
            console.log(finishedText);
        }
    }, 1000);
}



// .innerHTML = 'Count down starts now '+localStorage.clickcount + ' s';







// Remove Data from Local Storage
// localStorage.removeItem(key);

// Remove All - Clear Local Storage
// localStorage.clear(key);

// window.localStorage