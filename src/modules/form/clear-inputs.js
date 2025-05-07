const nameHuman = document.getElementById("name")
const namePet = document.getElementById("name-pet")
const phone = document.getElementById("phone")
const description = document.getElementById("service-description")

export function clearInputs() {
    nameHuman.value = "";
    namePet.value = "";
    phone.value = "";
    description.value = "";
}