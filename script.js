/* -------- DOCTOR UPDATE -------- */

const updateButton = document.getElementById("updateBtn");
const patientStatus = document.getElementById("patient-status");
const timeline = document.getElementById("timeline");

let doctorUpdateAdded = false;

updateButton.addEventListener("click", function () {

   if (patientStatus.textContent === "Waiting for Update") {

      patientStatus.textContent = "Doctor has completed today's rounds.";

      if (!doctorUpdateAdded) {
         timeline.innerHTML +=
            "<li><strong>11:30 AM:</strong> Doctor completed today's rounds.</li>";

         doctorUpdateAdded = true;
      }

      updateButton.textContent = "Updated ✓";
      updateButton.disabled = true;
   }

});
/* ---------- DASHBOARD NAVIGATION ---------- */

const dashboardButton = document.getElementById("dashboardBtn");
const patientButton = document.getElementById("patientBtn");
const medicationButton = document.getElementById("medicationBtn");
const notesButton = document.getElementById("notesBtn");
const timelineButton = document.getElementById("timelineBtn");

const dashboardView = document.getElementById("dashboardView");
const patientView = document.getElementById("patientView");
const medicationView = document.getElementById("medicationView");
const notesView = document.getElementById("notesView");
const timelineView = document.getElementById("timelineView");

function switchView(selectedView, selectedButton) {

   // Hide all views
   dashboardView.classList.add("hidden");
   patientView.classList.add("hidden");
   medicationView.classList.add("hidden");
   notesView.classList.add("hidden");
   timelineView.classList.add("hidden");

   // Remove all active highlights
   dashboardButton.classList.remove("active");
   patientButton.classList.remove("active");
   medicationButton.classList.remove("active");
   notesButton.classList.remove("active");
   timelineButton.classList.remove("active");

   // Show selected view and highlight its button
   selectedView.classList.remove("hidden");
   selectedButton.classList.add("active");

}

dashboardButton.addEventListener("click", function () {
   switchView(dashboardView, dashboardButton);
});

patientButton.addEventListener("click", function () {
   switchView(patientView, patientButton);
});

medicationButton.addEventListener("click", function () {
   switchView(medicationView, medicationButton);
});

notesButton.addEventListener("click", function () {
   switchView(notesView, notesButton);
});

timelineButton.addEventListener("click", function () {
   switchView(timelineView, timelineButton);
});