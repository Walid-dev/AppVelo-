class StoreUserData {
    constructor() {
        this.saveUserData = function() {
            let name = submittedValues.name.value;
            let lastName = submittedValues.surname.value;

            if (name.length > 1 && lastName.length > 1) {
                let name_serialized = JSON.stringify(name);
                let lastName_serialized = JSON.stringify(lastName);

                let nameValue = JSON.parse(name_serialized);
                let lastNameValue = JSON.parse(lastName_serialized);

                console.log(nameValue, lastNameValue);

                localStorage.setItem("name", name_serialized);
                localStorage.setItem("lastName", lastName_serialized);

                console.log(localStorage);
            } else {
                document.getElementById("nameLengthWarning").innerHTML =
                    "Vérifiiez que votre nom et prénom comportent au minimum 2 lettres et signez ci-dessous.";
            }
        };
    }
}

class SetInputsValuesWithLocalStorageData {
    constructor() {
        let nameValue = localStorage.getItem("name");
        let lastNameValue = localStorage.getItem("lastName");

        console.log("hello", nameValue, lastNameValue);
        function setInputsValues() {
            if (nameValue && lastNameValue) {
                console.log("existssss");
                document.getElementById("inputName").setAttribute("value", JSON.parse(nameValue));
                document.getElementById("inputSurname").setAttribute("value", JSON.parse(lastNameValue));
            } else {
                return;
            }
        }
        setInputsValues();
    }
}

const setNameAndLastNameInputFromLocalStorageData = new SetInputsValuesWithLocalStorageData();

class CheckInputValues {
    constructor() {
        this.name = document.querySelector("#inputName");
        this.surname = document.querySelector("#inputSurname");
        this.city = document.querySelector("#cityNameInp");
        this.btn = document.querySelector("#inputValidation");
        this.nameLengthWarning = document.getElementById("nameLengthWarning");
        this.userNameField = document.querySelector(".name_field_timer");
        this.yellowArrow = document.getElementById("arrowYellow");
        this.canvasSignatureText = document.querySelector(".canvasSignatureWarning");

        let isCanvasOff = true;
        // Check the name and surname length and store the data and display the canvas signature field or display the error
        this.checkIfString = function() {
            this.btn.addEventListener("click", () =>
                this.name.value.length > 1 && this.surname.value.length > 1 && isCanvasOff
                    ? newCanvas.draw() &
                      saveData1.saveUserData() &
                      $(this.yellowArrow).fadeIn(300) &
                      (this.canvasSignatureText.innerHTML = "Maintenir clic droit sur le champs puis signer.") &
                      (isCanvasOff = false) &
                      (this.nameLengthWarning.innerHTML = "Veuillez signez dans la partie ci-dessous.") &
                      (this.userNameField.innerHTML =
                          "<span>Nom : " + this.name.value + "<br> " + "Prenom : " + this.surname.value + "</span>")
                    : (this.nameLengthWarning.innerHTML =
                          "Vérifiiez que votre nom et prénom comportent au minimum 2 lettres et signez ci-dessous.")
            );
        };
    }
}

class SessionStorage {
    constructor() {
        this.promise = jcdPromise;
        this.promise.then(function(data) {
            console.log(data, "voilaaaaaaaa");

            for (const stations of data) {
            }
        });
    }
}
