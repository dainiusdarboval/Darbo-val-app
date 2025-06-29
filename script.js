const form = document.getElementById("timeForm");
const table = document.getElementById("entriesTable");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const date = document.getElementById("date").value;
  const departure = document.getElementById("departure").value;
  const start = document.getElementById("start").value;
  const end = document.getElementById("end").value;
  const ret = document.getElementById("return").value;

  const workHours = calculateDuration(start, end);
  const travelHours = calculateDuration(departure, start) + calculateDuration(end, ret);

  const row = table.insertRow();
  row.insertCell(0).innerText = date;
  row.insertCell(1).innerText = workHours.toFixed(2);
  row.insertCell(2).innerText = travelHours.toFixed(2);

  form.reset();
});

function calculateDuration(startTime, endTime) {
  const [startH, startM] = startTime.split(":").map(Number);
  const [endH, endM] = endTime.split(":").map(Number);
  let start = startH * 60 + startM;
  let end = endH * 60 + endM;
  let diff = end - start;
  if (diff < 0) diff += 24 * 60;
  return diff / 60;
}

function printPage() {
  window.print();
}
