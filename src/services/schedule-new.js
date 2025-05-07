import {apiConfig } from '../services/api-config.js'

export async function scheduleNew({ 
    id,
    nameTutor,
    namePet,
    numberPhone,
    desc,
    hourService,
    date }) {
    try {
        await fetch(`${apiConfig.baseURL}/schedules`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                id,
                nameTutor,
                namePet,
                numberPhone,
                desc,
                hourService,
                date 
            })
        })

        alert("Agendamento criado com sucesso!")

    } catch (error) {
        console.log(error)
        alert("Não foi possível criar um novo agendamento!")
    }
}