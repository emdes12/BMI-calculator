const heightFt = document.querySelector("#height-feet");
const heightIn = document.querySelector("#height-inch");
const weight = document.querySelector("#weight");
const submitBtn = document.querySelector("#submit");

heightIn.oninput = function () {
  heightFt.vaule = eval(this.value * 0.833)
}


heightFt.oninput = function () {
  heightIn.vaule = eval(this.value / 0.833)
}