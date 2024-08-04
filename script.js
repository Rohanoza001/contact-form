function formvalidation() {
    let name = document.getElementById("first-name").value;
    let l_name = document.getElementById("last-name").value;
    // let queryRadios = document.getElementById("radio-in").checked;
    let message = document.getElementById("message").value;
    let consent = document.getElementById("consent").checked;

    let name_error = document.getElementById("first-name-error");
    let last_name_error = document.getElementById("last-name-error");
    // let radia_in = document.getElementById("radio-in");
    let message_error = document.getElementById("message-error");
    let consent_error = document.getElementById("consent-error");

    let isValid = true;

    if (name == "") {
        name_error.textContent = "This field is required"
        isValid = false
    }

    if (l_name == "") {
        last_name_error.textContent = "This Field is required"
        isValid = false;
    }
    // let querySelected = false;
    // for (let i = 0; i < queryRadios.length; i++) {
    //     if (queryRadios[i].checked) {
    //         querySelected = true;
    //         break;
    //     }
    // }
    // if (!querySelected) {
    //     query_error.textContent = "Please select a Query Type";
    //     isValid = false;
    // } else {
    //     query_error.textContent = ""; 
    // }

    if (message == "") {
        message_error.textContent = "This Field is required"
        isValid = false;
    }
    if (!consent.checked) {
        consent_error.textContent = "To submit this form, please consent to being contacted";
        isValid = false;
    } else {
        consent_error.textContent = ""; // Clear error message if valid
    }

    return isValid;
}