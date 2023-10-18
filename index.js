const dnbDescriptionBtn = document.getElementById("dnb-description-btn");
const dnbCloseBtn = document.getElementById("dnb-close-btn");
const subjectiveDescriptionBtn = document.getElementById(
  "subjective-description-btn"
);
const subjectiveCloseBtn = document.getElementById("subjective-close-btn");

dnbDescriptionBtn.addEventListener("click", function () {
  document.getElementById("dnb-modal-container").classList.remove("hidden");
});
dnbCloseBtn.addEventListener("click", function () {
  document.getElementById("dnb-modal-container").classList.add("hidden");
});

subjectiveDescriptionBtn.addEventListener("click", function () {
  document
    .getElementById("subjective-modal-container")
    .classList.remove("hidden");
});
subjectiveCloseBtn.addEventListener("click", function () {
  document.getElementById("subjective-modal-container").classList.add("hidden");
});
