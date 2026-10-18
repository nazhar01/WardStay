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

const dashboardView = document.getElementById("dashboardView");
const patientView = document.getElementById("patientView");

patientButton.addEventListener("click", function () {

   dashboardView.classList.add("hidden");
   patientView.classList.remove("hidden");

   dashboardButton.classList.remove("active");
   patientButton.classList.add("active");

});

dashboardButton.addEventListener("click", function () {

   patientView.classList.add("hidden");
   dashboardView.classList.remove("hidden");

   patientButton.classList.remove("active");
   dashboardButton.classList.add("active");

});



