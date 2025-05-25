import dayjs from "dayjs";

import { openingHours } from "../../utils/petshop-opening.js";
import { hoursClick } from "./hours-click.js";

const hours = document.getElementById("service-hour");

export function hoursLoad({ date, dailySchedules }) {
  hours.innerHTML = "";

  const unavailableHours = dailySchedules.map((schedule) =>
    dayjs(schedule.hourService).format("HH:mm")
  );

  const opening = openingHours.map((hour) => {
    const [scheduleHour] = hour.split(":");

    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs());

    const available = !unavailableHours.includes(hour) && !isHourPast;

    return {
      hour,
      available,
    };
  });

  // renderizar os horarios
  opening.forEach(({ hour, available }) => {
    const option = document.createElement("option");
 
    option.classList.add(available ? "hour-available" : "hour-unavailable");

    option.textContent = hour;
 

    hours.append(option);
  });

  hoursClick();
}
