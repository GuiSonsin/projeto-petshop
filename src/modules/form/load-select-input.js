import { openingHours } from '../../utils/petshop-opening.js';  

const availableHours = document.getElementById("service-hour"); 
 
openingHours.forEach((hour) => {
    const option = document.createElement("option");
    option.value = hour;
    option.textContent = hour;
    availableHours.appendChild(option);
});
