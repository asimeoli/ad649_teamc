//submit form
function registrationComplete() {
  document.getElementById("registrationTitle").innerHTML =
    "Registration Complete";

  document.getElementById("registrationText").innerHTML = "Thank you!";

  document.getElementById("registrationForm").innerHTML =
    "<div class='card text-center border border-white' id='afterForm'><h3>You are now registered for the conference.</h3<br><p>To cancel your registration please click here:</p><button type='button' onClick='cancelComplete()' class='btn btn-danger btn-block'>Cancel</button>";
}

//cancel form
function cancelComplete() {
  location.reload();
}

//form info
function printInfo() {
  console.log(inputName);
}
