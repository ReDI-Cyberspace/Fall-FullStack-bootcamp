// Get element by ID //
const countInput = document.getElementById("countInput");
const startButton = document.getElementById("startButton");
const countOutput = document.getElementById("countOutput");

// Add event listener to the "startCounting" button
startButton.addEventListener("click", startCounting);

// startCounting function //
function startCounting () {
  //saving local storage as "lastInput"
  localStorage.setItem("LastInput", countInput.value);

 // display the initial counter value
  countOutput.innerHTML = countInput.value;

 let counter = countInput.value;

 // setInterval to update the countdown
 const countdownInterval = setInterval(() => {
  counter--;
  countOutput.innerHTML = counter;
  
  // Stop the countdown when it reaches 0
  if (counter === 0) {
    countOutput.innerHTML= "Countdown complete!";
    clearInterval(countdownInterval); // Stop the interval
  }
}, 1000); // 1000 milliseconds (1 second)

}