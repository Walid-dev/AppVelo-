class StoreUserData {
    constructor() {
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

class CheckInputValues {
    constructor() {
        this.name = document.querySelector("#inputName");
        this.surname = document.querySelector("#inputSurname");
        this.city = document.querySelector("#cityNameInp");
        this.btn = document.querySelector("#inputValidation");
        this.nameLengthWarning = document.getElementById("nameLengthWarning");
        this.userNameField = document.querySelector(".name_field_timer");
        this.checkIfString = function() {
            this.btn.addEventListener("click", () =>
                this.name.value.length > 1 && this.surname.value.length > 1
                    ? saveData1.saveUserData() &
                      (this.nameLengthWarning.innerHTML = "") &
                      (this.userNameField.innerHTML =
                          "<span>par " + this.name.value + " " + this.surname.value + "</span>")
                    : (this.nameLengthWarning.innerHTML = "Votre nom et prénom doivent comporter au moins 2 lettres.")
            );
        };
    }
}
