entry = "";
//displays the number/symbol pressed in top box
const writeEntry = function(value) {
        if (entry.length < 20) {
            entry += value;
            document.getElementById("textEntry").innerText = entry;
        } else {}
    }
    //calculates what is entered in top box
const calculate = function() {
        let calculatedEntry = eval(entry)
        document.getElementById("textEntry").innerText = calculatedEntry;
        entry = `${calculatedEntry}`;
    }
    //reloads page
const clear = function() {
        document.getElementById("textEntry").innerText = "";
        entry = "";
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

let elements = document.getElementsByTagName("button");
for (let i = 0; i <= elements.length - 1; i++) {
    elements[i].addEventListener("click", () => elements[i].style.backgroundColor = "rgb(194,193,193,.8)")
}
for (let i = 0; i <= elements.length - 1; i++) {
    elements[i].addEventListener("mouseleave", () => elements[i].style.backgroundColor = "rgb(194, 193, 193)")
}