function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelectorAll(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeModalBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// validation du mail
function validateMail() {
  var mail = document.reserve.email;
  var mailFormat = /^[\w-.]+@([\w-]+\.)+[\w-]{2,3}$/;

  if(mail.value.match(mailFormat)) {
    return true;
  } else {
    return false;
  }
}




// fonction valider
function validate() {

  var firstname = document.reserve.first;
  var lastname = document.reserve.last;
  var mail = document.reserve.email;
  var birth = document.reserve.birthdate;
  var qty = document.reserve.quantity;
  var locations = document.reserve.location;
  var generalConditions = document.reserve.checkbox1;

  //si la valeur du champ prénom est vide
  if(firstname.value == "" || firstname.value.length < 2) {
    firstname.focus();
    return false;
  }

  //si la valeur du champ nom est vide
  if(lastname.value == "" || lastname.value.length < 2) {
    lastname.focus();
    return false;
  }

  //si la valeur du champ email est vide
  if(mail.value == "") {
    mail.focus();
    return false;
  }

  //si la valeur du champ email ne match pas avec mailFormat
  if(validateMail() == false) {
    console.log(validateMail());
    alert("Vous avez entré un mail invalide")
    mail.focus();
    return false;
  }

  //si la valeur du champ birthdate est vide
  if(birth.value == "") {
    alert("Veuillez entrer votre date de naissance")
    birth.focus();
    return false;
  }

  //si la valeur du champ quantity est vide
  if(qty.value == "") {
    alert("Veuillez saisir le nombre de tournois auquel vous avez participé")
    qty.focus();
    return false;
  }

  if(locations.value == '' ) {
    alert("Veuillez choisir un tournoi")
    return false;
  }

  if(!generalConditions.checked) {
    alert("Veuillez cocher la case \"J'ai lu et accepté les conditions d'utilisation.\"")
    return false;
  }

  else {
    alert("OK !!!");
    return true;
  }
}
