
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

submitBtn.onclick = function (e) {
  e.preventDefault();
  resultDisp.innerHTML  =` BMI RESULT: ${eval(weight.value / ((heightIn.value/39.3701) * (heightIn.value/39.3701)))} kg/m<sup>2</sup>`;

}
