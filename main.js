// PSUEDO CODE
/**
 * Get references to html elements
 * create a function to get the current day and time
 * display the current date and time using textcontent
 * display the current date and time on window load
 */

const dayEl = document.getElementById("dayOfWeek");
const timeEl = document.getElementById("currentTime");

let dayOfWeek;
let currentTime;

function updateDateAndTime() {
  let currentDate = Date.now();
  console.log(currentDate);
  dayOfWeek = new Date(currentDate).toLocaleDateString(undefined, {
    weekday: "long",
  });
  currentTime = new Date(currentDate).toLocaleTimeString();

  dayEl.textContent = dayOfWeek;
  timeEl.textContent = currentTime;
}

window.onload = updateDateAndTime;
