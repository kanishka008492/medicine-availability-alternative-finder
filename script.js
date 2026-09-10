const medicines = {
    "paracetamol": {
        name: "Paracetamol 500 mg",
        status: "Available",
        pharmacy: "City Medicals",
        location: "Main Road",
        alternatives: ["Paracetamol 650 mg", "Acetaminophen"]
    },

    "cetirizine": {
        name: "Cetirizine 10 mg",
        status: "Available",
        pharmacy: "Health Pharmacy",
        location: "Market Street",
        alternatives: ["Levocetirizine"]
    },

    "amoxicillin": {
        name: "Amoxicillin 500 mg",
        status: "Out of Stock",
        pharmacy: "Care Pharmacy",
        location: "Hospital Road",
        alternatives: ["Consult a doctor or pharmacist for an appropriate alternative"]
    },

    "ibuprofen": {
        name: "Ibuprofen 400 mg",
        status: "Available",
        pharmacy: "Wellness Medicals",
        location: "Bus Stand Road",
        alternatives: ["Consult a pharmacist for appropriate alternatives"]
    }
};

function searchMedicine() {

    const input = document
        .getElementById("medicineInput")
        .value
        .trim()
        .toLowerCase();

    const medicineResult =
        document.getElementById("medicineResult");

    const alternativeResult =
        document.getElementById("alternativeResult");

    if (input === "") {
        medicineResult.innerHTML =
            "<p>Please enter a medicine name.</p>";

        alternativeResult.innerHTML =
            "<p>No medicine selected.</p>";

        return;
    }

    const medicine = medicines[input];

    if (medicine) {

        medicineResult.innerHTML = `
            <h3>${medicine.name}</h3>
            <p><strong>Status:</strong> ${medicine.status}</p>
            <p><strong>Pharmacy:</strong> ${medicine.pharmacy}</p>
            <p><strong>Location:</strong> ${medicine.location}</p>
        `;

        alternativeResult.innerHTML = `
            <p><strong>Possible alternatives / guidance:</strong></p>
            <ul>
                ${medicine.alternatives
                    .map(item => `<li>${item}</li>`)
                    .join("")}
            </ul>

            <p>
                <strong>Important:</strong>
                Consult a doctor or pharmacist before changing
                any prescribed medicine.
            </p>
        `;

    } else {

        medicineResult.innerHTML = `
            <p>
                Medicine not found in the prototype database.
            </p>
        `;

        alternativeResult.innerHTML = `
            <p>
                Please consult a nearby pharmacist for availability
                and appropriate alternatives.
            </p>
        `;
    }
}
