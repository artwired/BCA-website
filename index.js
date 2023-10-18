const dnbDescriptionBtn = document.getElementById("dnb-description-btn");
const dnbCloseBtn = document.getElementById("dnb-close-btn");

dnbDescriptionBtn.addEventListener("click", function () {
  document.getElementById("dnb-modal-container").classList.remove("hidden");
});
dnbCloseBtn.addEventListener("click", function () {
  document.getElementById("dnb-modal-container").classList.add("hidden");
});
