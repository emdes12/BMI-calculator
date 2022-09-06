
const heightFt = document.querySelector("#height-feet");

const heightIn = document.querySelector("#height-inch");

const weight = document.querySelector("#weight");

const submitBtn = document.querySelector("#submit");

const resultDisp = document.querySelector("h2");

heightIn.oninput = function () {

  heightFt.value = eval(this.value / 12)

}

heightFt.oninput = function () {

  heightIn.value = eval(this.value * 12)

}

submitBtn.onclick = function () {

  resultDisp.innerHTML  =` BMI RESULT: ${eval(weight.value / (heightIn.value * heightIn.value))} km/m <sup>2</sup>`;

}








