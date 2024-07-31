function formvalidation() {
    let name = document.getElementById("first-name").value;
    // let l_name = document.getElementById("last-name").value;
    // let query = document.getElementById("radio-in").value;
    // let message = document.getElementById("message").value;
    // let consent = document.getElementById("consent").value;

    let name_error = document.getElementById("first-name-error");
    // let last_name_error = document.getElementById("last-name-error");
    // let radia_in = document.getElementById("radio-in");
    // let message_error = document.getElementById("message-error");
    // let consent_error = document.getElementById("consent-error");

    if (name == null || name == "") {
        alert("First Name is required")
        return false;
    }
    // if (l_name == null || l_name == "") {
    //     last_name_error.textContent = "This Field is required"
    //     return false;
    // }
    // if (query == null || query == "") {
    //     radia_in.textContent = "Please select a Query Type"
    //     return false;
    // }
    // if (message == null || message == "") {
    //     message_error.textContent = "This Field is required"
    //     return false;
    // }
    // if (consent == null || consent == "") {
    //     consent_error.textContent = "To submit this form, Please consent to being contacted"
    //     return false;
    // }
}