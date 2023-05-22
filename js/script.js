const $form = document.querySelector('#form')

function tesNomorHP(phone) {
    if (!phone || !/^08[1-9][0-9]{7,10}$/.test(phone)) {
        return false;
    }
    return true;
}

function ValidateEmail(mail) {
 if (!mail || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
    return false;
  }
    return true;
}

$form.addEventListener('submit',(e)=>{
    e.preventDefault()

   const name= document.getElementById("name").value
   console.log(name)
   if (name===''){
    Swal.fire(
        'ERROR',
        'Nama tidak boleh kosong!',
        'error'
      )
    return;
   }

   const email= document.getElementById("email").value
   const validateEmail = ValidateEmail(email)
   console.log(email)
   if (!validateEmail){
    Swal.fire(
        'ERROR',
        'Email tidak valid  !',
        'error'
      )
    return;
   }

   const pnumber= document.getElementById("pnumber").value
   const isValidPhone = tesNomorHP(pnumber)
   console.log(pnumber)
   if (!isValidPhone){
    Swal.fire(
        'ERROR',
        'Nomor tidak valid',
        'error'
      )
    return;
   }

   const subject= document.getElementById("subject").value
   console.log(subject)
   if (subject===''){
    Swal.fire(
        'ERROR',
        'Subject tidak boleh kosong!',
        'error'
      )
    return;
   }

   const message= document.getElementById("message").value
   console.log(message)
   if (message===''){
    Swal.fire(
        'ERROR',
        'Message tidak boleh kosong!',
        'error'
      )
    return;
   }
})