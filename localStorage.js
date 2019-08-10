class StoreUserData {
    constructor() {
        this.setInputValueWithLocalStorage = function() {
            document.getElementById("inputName").value = JSON.parse(localStorage.name);
            document.getElementById("inputLastName").value = JSON.parse(localStorage.lastName);
        };
        this.saveUserData = function() {
            let userData = {
                name: submittedValues.name.value,
                surname: submittedValues.surname.value,
                city: submittedValues.city.value
            };

            let userData_serialized = JSON.stringify(userData);
            console.log(userData_serialized);

            localStorage.setItem("userData", userData_serialized);
            console.log(localStorage);

            let userData_deserialized = JSON.parse(localStorage.getItem("userData"));
            console.log(userData_deserialized);
        };
    }
}

const saveData1 = new StoreUserData();
saveData1.setInputValueWithLocalStorage();
const newCanvas = new CreateCanvas("canvasDiv", "480px", "280px");

class CheckInputValues {
    constructor() {
        this.name = document.querySelector("#inputName");
        this.surname = document.querySelector("#inputSurname");
        this.city = document.querySelector("#cityNameInp");
        this.btn = document.querySelector("#inputValidation");
        this.nameLengthWarning = document.getElementById("nameLengthWarning");
        this.userNameField = document.querySelector(".name_field_timer");
        let isCanvasOff = true;
        // Check the name and surname length and store the data and display the canvas signature field or display the error
        this.checkIfString = function() {
            this.btn.addEventListener("click", () =>
                this.name.value.length > 1 && this.surname.value.length > 1 && isCanvasOff
                    ? saveData1.saveUserData() &
                      newCanvas.draw() &
                      (isCanvasOff = false) &
                      (this.nameLengthWarning.innerHTML = "") &
                      (this.userNameField.innerHTML =
                          "<span>par " + this.name.value + " " + this.surname.value + "</span>")
                    : (this.nameLengthWarning.innerHTML =
                          "Vérifiiez que votre nom et prénom comportent au minimum 2 lettres et signez ci-dessous.")
            );
        };
    }
}
