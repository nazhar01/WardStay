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