const lengthEl = document.getElementById("text-1");
const volumeEl = document.getElementById("text-2");
const massEl = document.getElementById("text-3");
const convertBtn = document.getElementById("convert");
let inputEl = document.getElementById("input");
const lightBtn = document.getElementById("light");
const darkBtn = document.getElementById("dark");

const meterToFeet = 3.281;
const literToGallon = 0.264;
const KiloToPound = 2.204;

lightBtn.addEventListener("click", function() {
    document.body.style.backgroundColor = "#f0f0f0";
});

darkBtn.addEventListener("click", function() {
    document.body.style.backgroundColor = "#000000";
});

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value;
    if (baseValue > 0) {
    lengthEl.textContent = `${baseValue} meters = ${(meterToFeet * baseValue).toFixed(3)} feet | ${baseValue} feet = ${(baseValue / meterToFeet).toFixed(3)} meters`;

    volumeEl.textContent = `${baseValue} liters = ${(literToGallon * baseValue).toFixed(3)} gallons | ${baseValue} gallons = ${(baseValue / literToGallon).toFixed(3)} liters`;

    massEl.textContent = `${baseValue} kilos = ${(KiloToPound * baseValue).toFixed(3)} pounds | ${baseValue} pounds = ${(baseValue / meterToFeet).toFixed(3)} kilos`;
    } else {
        lengthEl.textContent = "Unconvertable"
        volumeEl.textContent = "Unconvertable"
        massEl.textContent = "Unconvertable";
    }
    console.log("Button Clicked")
});
