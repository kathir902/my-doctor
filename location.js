const hospitalsByState = {
    lagos: ["the medison hospital", "reddington hospital", "first consultant hospital", "st. ives", "lagoon hospital", "gold cross hospital(gch) ikoyi", "st. nicholas hospital", "evercare hospital"] ,
    abuja: ["dheeraj bojwani consultants", "nums diagnostics", "dr hassan's hospital & diagnostic centre", "NIZAMIYE HOSPITAL", "cedacrest hospitals", "havilla eye hospital"],
    rivers: ["first rivers hospital limited", "ponyx hospital", "obio cottage hospital", "lushgreen medical center", "university of port-hacourt teaching hospital", "morning star hospital", "hopeville specialist hospital", "buttom line"],
    osun: ["adebare specialist hospital", "osogbo central hospital", "biket medical center", "BWB Hospital"]
};

function populateHospitals(){
    const stateSelect = document.getElementById("state");
    const hospitalSelect = document.getElementById("hospital")
    const selectedState = stateSelect.value;

    hospitalSelect.innerHTML = "<option value=''>--Select Hospital--</option>";
    if(selectedState){
        const hospitals = hospitalsByState[selectedState];
        hospitals.forEach((hospital) => {
            const option = document.createElement("option");
            option.value = hospital;
            option.textContent = hospital;
            hospitalSelect.appendChild(option);
        });
    }
}

const submitButton = document.querySelector('.hospital-body .hospital-container button');
submitButton.addEventListener('click', () => {
    document.querySelector('.hospital-body .patient-id').style.display = 'block';
    document.querySelector('.hospital-body .hospital-container').style.display = 'none';
    
});

preventDefault();