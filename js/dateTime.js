"use strict";
console.log("pr1.js file was loaded");

// data

const nowObj = new Date();
console.log("nowObj ===", nowObj);
console.log("+nowObj ===", +nowObj);
console.log("nowObj ===", nowObj.getFullYear());
console.log("nowObj ===", nowObj.getMonth() + 1);
console.log("nowObj ===", nowObj.getDate());
console.log("nowObj ===", nowObj.toISOString());
console.log("nowObj ===", nowObj.toLocaleDateString());
console.log("nowObj ===", nowObj.toLocaleTimeString());

// date.toLocaleString('kalba', {papildomi nustatymai})

const niceDate = nowObj.toLocaleString("lt-LT", {
  dateStyle: "full",
  timeStyle: "medium",
});
const niceTime = nowObj.toLocaleString("lt-LT", { timeStyle: "medium" });
console.log("niceDate ===", niceDate);
console.log("niceTime ===", niceTime);

// patalpinti data i <h2 id="date"></h2>

// patalpinti dabarini laika i <h2 id="time"></h2>
// patalpinti dabarini laika i <h2 id="time"></h2> su funkcija pavadinimu tick()

const els = {
  data: document.getElementById("date"),
  laikas: document.getElementById("time"),
};
console.log("els ===", els);

els.data.textContent = niceDate;

function tick() {
  console.log("ivyko tick");
  const now = new Date();
  const niceTimeFn = now.toLocaleString("lt-LT", { timeStyle: "medium" });

  els.laikas.textContent = niceTimeFn;
}

// setInterval(funckija, laikas ms)
setInterval(tick, 1000);
