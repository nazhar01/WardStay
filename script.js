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
/* ---------- CAREGIVER NOTES ---------- */

const noteInput = document.getElementById("noteInput");
const saveNoteButton = document.getElementById("saveNoteBtn");
const notesList = document.getElementById("notesList");
let notes = JSON.parse(
   localStorage.getItem("wardStayNotes")
) || [];
function showNote(note) {

   const newNote = document.createElement("div");
   newNote.classList.add("note-card");

   const noteDate = document.createElement("small");
   noteDate.textContent = note.date;

   const noteContent = document.createElement("p");
   noteContent.textContent = note.text;

   const editButton = document.createElement("button");
   editButton.textContent = "Edit";

   editButton.addEventListener("click", function () {

      const updatedText = prompt("Edit your note:", noteContent.textContent);

      if (updatedText !== null && updatedText.trim() !== "") {

         note.text = updatedText.trim();

         noteContent.textContent = note.text;

         localStorage.setItem(
            "wardStayNotes",
            JSON.stringify(notes)
         );
      }

   });

   const deleteButton = document.createElement("button");
   deleteButton.textContent = "Delete";

   deleteButton.addEventListener("click", function () {

      const noteIndex = notes.indexOf(note);

      if (noteIndex !== -1) {
         notes.splice(noteIndex, 1);
      }

      localStorage.setItem(
         "wardStayNotes",
         JSON.stringify(notes)
      );

      newNote.remove();
   });

   newNote.appendChild(noteDate);
   newNote.appendChild(noteContent);
   newNote.appendChild(editButton);
   newNote.appendChild(deleteButton);

   notesList.prepend(newNote);

}
saveNoteButton.addEventListener("click", function () {

   const noteText = noteInput.value.trim();

   if (noteText === "") {
      return;
   }
   const note = {
      text: noteText,
      date: new Date().toLocaleString("en-MY")
   };

   notes.push(note);

   localStorage.setItem("wardStayNotes", JSON.stringify(notes));

   showNote(note);

   noteInput.value = "";

});
// Display previously saved notes when WardStay loads
notes.forEach(function (note) {
   showNote(note);
});

/* ---------- PATIENT NAME ---------- */
const patientNameDisplay = document.getElementById("patientName");
const patientNameEditInput = document.getElementById("patientNameEditInput");
const savePatientNameBtn = document.getElementById("savePatientNameBtn");

const topbarPatientName = document.getElementById("topbarPatientName");

savePatientNameBtn.addEventListener("click", function () {

   const updatedName = patientNameEditInput.value.trim();

   if (updatedName === "") {
      return;
   }

   patientNameDisplay.textContent = updatedName;

   topbarPatientName.textContent = updatedName;

   localStorage.setItem("wardStayPatientName", updatedName);
});

const savedPatientName = localStorage.getItem("wardStayPatientName");

if (savedPatientName !== null) {
   patientNameDisplay.textContent = savedPatientName;

   topbarPatientName.textContent = savedPatientName;
}


/* ---------- MEDICATION VIEW ---------- */
const medStatus1 = document.getElementById("medStatus1");
const markTakenBtn1 = document.getElementById("markTakenBtn1");

markTakenBtn1.addEventListener("click", function () {

   if (medStatus1.textContent === "Pending") {
      medStatus1.textContent = "Taken";
   } else {
      medStatus1.textContent = "Pending";
   }

   localStorage.setItem(
      "wardStayMedStatus1",
      medStatus1.textContent
   );
});

const savedMedStatus1 = localStorage.getItem("wardStayMedStatus1");

if (savedMedStatus1 !== null) {
   medStatus1.textContent = savedMedStatus1;
}