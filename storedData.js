function StoreData(name, surname) {
    this.name = document.querySelector("#inputName");
    this.surname = document.querySelector("#inputSurname");
    this.btn = document.querySelector(".searchButton");
    this.test = function() {
        this.btn.addEventListener("click", () =>
            this.name.value.length > 1 && this.surname.value.length > 1
                ? console.log(this.name.value, this.surname.value)
                : alert("Le nom doit comporter au minimum 2 lettres.")
        );
    };
}

const test = new StoreData();
test.test();
