const schedulesBtn = document.getElementById("btn-schedules");
const btnToSchedule = document.getElementById("btnToSchedule");
const modal = document.getElementById("modalContainer");
const btnCancel = document.querySelector(".btn-cancel-schedule")

schedulesBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

btnToSchedule.addEventListener("click", () => {
  modal.classList.add("hidden");
});

btnCancel.addEventListener("click", () => {
  modal.classList.add("hidden");
})
