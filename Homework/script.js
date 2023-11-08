var finishedText = 'Countdown complete!';

function setTime(countInput) {
    if (localStorage.getItem('countInput') === null) {
        // Retrieve user's input and then store it
        var countDownStart = parseInt(document.getElementById('countInput').value, 10);
        // Save Data to Local Storage
        localStorage.setItem('countInput', countDownStart);
    } else {
        // Read Data from Local Storage
        var countDownStart = parseInt(localStorage.getItem('countInput'), 10);
    }

    // Get the element for displaying countdown
    var countdownDisplay = document.getElementById('countOutput');

    var timer = setInterval(function () {
        countdownDisplay.innerHTML = 'Count down starts now ' + countDownStart + ' s';
        countDownStart--;

        if (countDownStart < 0) {
            clearInterval(timer);
            countdownDisplay.innerHTML = finishedText;
        }
    }, 1000);
}

document.getElementById('startButton').addEventListener('click', setTime);