// PSUEDO CODE
/**
 * Get references to html elements
 * create a function to get the current day and time
 * display the current date and time using textcontent
 * display the current date and time on window load
 */

const dayEl = document.getElementById("currentDayOfTheWeek");
const timeEl = document.getElementById("currentUTCTime");

function updateDateAndTime() {
  const currentDate = new Date();

  const dayOfWeek = currentDate.toLocaleDateString("en", { weekday: "long" });

  const currentTime = Date.now();

  dayEl.textContent = dayOfWeek;
  timeEl.textContent = currentTime;
}

window.onload = updateDateAndTime;
setInterval(updateDateAndTime, 1000);
