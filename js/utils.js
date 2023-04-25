import { Modal } from "./modal.js";

export function notANumber(value) {
    return isNaN(value) || value == ""
}

export function calculateBMI(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2);
}

export function displayResultMessage(result) {
    const message = `Your BMI is: ${result}`;

    Modal.message.innerText = message;
    Modal.open();
}