const schedulesBtn = document.getElementById("btn-schedules"); 
const modal = document.getElementById("modalContainer");
const btnCancel = document.querySelector(".btn-cancel-schedule")

schedulesBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

btnCancel.addEventListener("click", () => {
  modal.classList.add("hidden");
})
