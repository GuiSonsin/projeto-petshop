import dayjs from "dayjs";

const dateSelected = document.getElementById("date");
const dateService = document.getElementById("date-service")

const inputDay = dayjs(new Date()).format("YYYY-MM-DD")

dateSelected.value = inputDay
dateSelected.min = inputDay
 
dateService.value = inputDay
dateService.min = inputDay