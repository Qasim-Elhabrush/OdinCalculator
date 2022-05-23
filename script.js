entry = "";
const writeEntry = function(value) {
    entry += value;
    document.getElementById("textEntry").innerText = entry;

}
const calculate = function() {
    entry.replace(/[^-()\d/*+.]/g, '');
    alert(eval(entry));
}
const clear = function() {
    window.location.reload();
}
document.getElementById("0").addEventListener("click", function() { writeEntry(0); });
document.getElementById("1").addEventListener("click", function() { writeEntry(1); });
document.getElementById("2").addEventListener("click", function() { writeEntry(2); });
document.getElementById("3").addEventListener("click", function() { writeEntry(3); });
document.getElementById("4").addEventListener("click", function() { writeEntry(4); });
document.getElementById("5").addEventListener("click", function() { writeEntry(5); });
document.getElementById("6").addEventListener("click", function() { writeEntry(6); });
document.getElementById("7").addEventListener("click", function() { writeEntry(7); });
document.getElementById("8").addEventListener("click", function() { writeEntry(8); });
document.getElementById("9").addEventListener("click", function() { writeEntry(9); });
document.getElementById(".").addEventListener("click", function() { writeEntry("."); });
document.getElementById("*").addEventListener("click", function() { writeEntry('*'); });
document.getElementById("/").addEventListener("click", function() { writeEntry('/'); });
document.getElementById("-").addEventListener("click", function() { writeEntry('-'); });
document.getElementById("+").addEventListener("click", function() { writeEntry('+'); });
document.getElementById("=").addEventListener("click", calculate);
document.getElementById("Clear").addEventListener("click", clear);