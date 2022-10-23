// EMAIL JS
function validate() {
  let name = document.querySelector(".name");
  let email = document.querySelector(".email");
  let msg = document.querySelector(".message");
  let submitBtn = document.querySelector(".submit-btn");

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (name.value == "" || email.value == "" || msg.value == "") {
      emptyError();
    } else {
      sendEmail(name.value, email.value, msg.value);
      success();
    }
  });
}

validate();

function sendEmail(name, email, msg) {
  emailjs.send("service_8jpatmn", "template_mjvwela", {
    from_name: email,
    to_name: name,
    message: msg,
  });
}

function emptyError() {
  swal({
    title: "Error!",
    text: "Please fill out all fields",
    icon: "error",
  });
}

function success() {
  swal({
    title: "Success!",
    text: "Your message has been sent",
    icon: "success",
  });
}
