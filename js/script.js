
import { AlertError } from "./alert-error.js";
import { calculateBMI, notANumber, displayResultMessage } from "./utils.js";

const form = document.querySelector("#form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

form.onsubmit = event => {
    event.preventDefault();

    const weight = Number(inputWeight.value);
    const height = Number(inputHeight.value);

    const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)
  
    if (weightOrHeightIsNotANumber) {
        AlertError.open(console.log("oi"));
        return;
    }

    AlertError.close();

    const result = calculateBMI(weight, height);
    displayResultMessage(result);
}

inputHeight.oninput = () => AlertError.close();
inputWeight.oninput = () => AlertError.close();


