const $form = document.querySelector("#form");

$form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("namepro").value;
  console.log(name);
  if (name === "") {
    Swal.fire("ERROR", "Nama tidak boleh kosong!", "error");
    return;
  }

  const email = document.getElementById("email").value;
  const validateEmail = ValidateEmail(email);
  console.log(email);
  if (!validateEmail) {
    Swal.fire("ERROR", "Email tidak valid  !", "error");
    return;
  }

  const pnumber = document.getElementById("pnumber").value;
  const isValidPhone = tesNomorHP(pnumber);
  console.log(pnumber);
  if (!isValidPhone) {
    Swal.fire("ERROR", "Nomor tidak valid", "error");
    return;
  }

  const subject = document.getElementById("subject").value;
  console.log(subject);
  if (subject === "") {
    Swal.fire("ERROR", "Subject tidak boleh kosong!", "error");
    return;
  }

  const message = document.getElementById("message").value;
  console.log(message);
  if (message === "") {
    Swal.fire("ERROR", "Message tidak boleh kosong!", "error");
    return;
  }

  const actualBtn = document.getElementById("actual-btn");

  const fileChosen = document.getElementById("file-chosen");

  actualBtn.addEventListener("change", function () {
    fileChosen.textContent = this.files[0].name;
  });
});
