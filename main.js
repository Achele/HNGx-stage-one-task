// PSUEDO CODE
/**
 * Get references to html elements
 * create a function to get the current day and time
 * display the current date and time using textcontent
 * display the current date and time on window load
 */

const dayEl = document.getElementById("dayOfWeek");
const timeEl = document.getElementById("currentTime");

function updateDateAndTime() {
  const currentDate = new Date();
  const hours = currentDate.getUTCHours();
  const minutes = currentDate.getUTCMinutes();
  const seconds = currentDate.getUTCSeconds();

  const dayOfWeek = currentDate.toLocaleDateString("en", { weekday: "long" });

  const currentTime = hours + ":" + minutes + ":" + seconds;

  dayEl.textContent = dayOfWeek;
  timeEl.textContent = currentTime;
}

window.onload = updateDateAndTime;
setInterval(updateDateAndTime, 1000);
