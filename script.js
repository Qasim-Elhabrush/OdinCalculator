entry = "";
//displays the number/symbol pressed in top box
const writeEntry = function(value) {
        entry += value;
        document.getElementById("textEntry").innerText = entry;

    }
    //calculates what is entered in top box
const calculate = function() {
        entry.replace(/[^-()\d/*+.]/g, '');
        entry = eval(entry)
        document.getElementById("textEntry").innerText = entry;
    }
    //reloads page
const clear = function() {
        window.location.reload();
    }
    //creates event listeners for each button
for (let i = 0; i <= 9; i++) {
    document.getElementById(`${i}`).addEventListener("click", function() { writeEntry(i); });
}
document.getElementById(".").addEventListener("click", function() { writeEntry("."); });
document.getElementById("*").addEventListener("click", function() { writeEntry('*'); });
document.getElementById("/").addEventListener("click", function() { writeEntry('/'); });
document.getElementById("-").addEventListener("click", function() { writeEntry('-'); });
document.getElementById("+").addEventListener("click", function() { writeEntry('+'); });
document.getElementById("=").addEventListener("click", calculate);
document.getElementById("Clear").addEventListener("click", clear);