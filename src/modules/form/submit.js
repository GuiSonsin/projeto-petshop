import dayjs from "dayjs";
import { scheduleNew } from '../../services/schedule-new.js'
import { clearInputs } from "./clear-inputs.js";


const dateSelected = document.getElementById("date");
const dateService = document.getElementById("date-service");

const form = document.querySelector("form")
const name = document.getElementById("name")
const petName = document.getElementById("name-pet")
const phone = document.getElementById("phone")
const description = document.getElementById("service-description") 
const serviceHour = document.getElementById("service-hour")

const inputDay = dayjs(new Date()).format("YYYY-MM-DD");

dateSelected.value = inputDay;
dateSelected.min = inputDay;

dateService.value = inputDay;
dateService.min = inputDay;


form.onsubmit = (e) =>{
    e.preventDefault() 
    
    const nameTutor = name.value.trim()
    const namePet = petName.value.trim()
    const numberPhone = phone.value.trim()
    const desc = description.value.trim()
    const hourService = serviceHour.value
    const date = dateService.value
    
    if(!nameTutor){
        return alert("Insira o nome do tutor corretamente!")
    }

    if(!namePet){
        return alert("Insira o nome do pet corretamente!")
    }

    if(!numberPhone){
        return alert("Insira um número de telefone corretamente!")
    }

    if(!desc){
        return alert("Insira uma descrição corretamente!")
    }

    if(!hourService){
        return alert("Selecione um horário de serviço corretamente!")
    }

    if(!date){
        return alert("Selecione uma data corretamente!")
    }

    const id = String(new Date().getTime())

    scheduleNew({
        id,
        nameTutor,
        namePet,
        numberPhone,
        desc,
        hourService,
        date
    })

    clearInputs()

    try { 
    } catch (error) {
        console.log(error)
        alert("Não foi possível fazer o agendamento!")
    }
}