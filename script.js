
document.getElementById("date").innerHTML += " " + getCurrentDayOfWeek() + '!'

// date script
function getCurrentDayOfWeek() {
   const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   const d = new Date()
   return daysOfWeek[d.getDay()]
}