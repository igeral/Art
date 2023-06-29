const submitform = document.querySelector(
  ".wpcf7-form-control.wpcf7-submit.ws-big-btn"
);
function sendEmail() {
  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var country = document.getElementById("country").value;
  var reason = document.getElementById("reason").value;
  var method = document.getElementById("method").value;

  //   var myData = localStorage.getItem("language");
  //   var isCheckboxChecked = false;

  //   checkbox.forEach(function (box) {
  //     if (box.checked) {
  //       isCheckboxChecked = true;
  //     }
  //   });

  //   if (!isCheckboxChecked) {
  //     swal("Error!", "Please agree to the terms and conditions.", "error");
  //     return;
  //   }

  // Make an AJAX request to the PHP file
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "action.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        console.log(response);

        if (response.status === "success") {
          // Display success alert
          swal("Success!", response.message, "success").then(function () {
            // Redirect or perform other actions
            // window.location.href = "index.html";
          });
        } else {
          // Display error alert
          swal("Error!", response.message, "error");
        }
      } else {
        // Display error alert
        swal("Error!", "An error occurred while submitting the form.", "error");
      }
    }
  };

  // Send the form data as URL-encoded parameters
  var params =
    "firstname=" +
    encodeURIComponent(firstname) +
    "&lastname=" +
    encodeURIComponent(lastname) +
    "&country=" +
    encodeURIComponent(country) +
    "&reason=" +
    encodeURIComponent(reason) +
    "&method=" +
    encodeURIComponent(method) +
    "&email=" +
    encodeURIComponent(email) +
    "&message=" +
    encodeURIComponent(message);

  xhr.send(params);
}

submitform.addEventListener("click", (e) => {
  e.preventDefault();
  //   let isUsernameValid = checkUsername(),
  //     isEmailValid = checkEmail();

  //   let isFormValid = isUsernameValid && isEmailValid;

  // submit to the server if the form is valid
  //   if (isFormValid) {
  sendEmail();
  document.querySelector(".ws-contact-form").reset();
  //   } else {
  //     checkEmail();
  //     checkUsername();
  //   }
});
