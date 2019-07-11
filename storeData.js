function StoreUserData() {
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

const saveData1 = new StoreUserData();

function CheckInputValues() {
    this.name = document.querySelector("#inputName");
    this.surname = document.querySelector("#inputSurname");
    this.city = document.querySelector("#search");
    this.btn = document.querySelector(".searchButton");
    this.checkIfString = function() {
        this.btn.addEventListener("click", () =>
            this.name.value.length > 1 && this.surname.value.length > 1 ? saveData1.saveUserData() : console.log("nom plus d'une letter")
        );
    };
}

const submittedValues = new CheckInputValues();
submittedValues.checkIfString();
console.log(submittedValues.name.value);
