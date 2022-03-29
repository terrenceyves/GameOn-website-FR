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

var firstname = document.reserve.first;
var lastname = document.reserve.last;
var mail = document.reserve.email;
var birth = document.reserve.birthdate;
var qty = document.reserve.quantity;
var locations = document.reserve.location;
var generalConditions = document.reserve.checkbox1;

var error_first = document.getElementById("error-first");
var error_last = document.getElementById("error-last");
var error_email = document.getElementById("error-email");
var error_birth = document.getElementById("error-birth");
var error_qty = document.getElementById("error-qty");
var error_option = document.getElementById("error-option");
var error_conditions = document.getElementById("error-conditions");

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
function validateRegexMail() {
  var mail = document.reserve.email;
  var mailFormat = /^[\w-.]+@([\w-]+\.)+[\w-]{2,3}$/;

  if(mail.value.match(mailFormat)) {
    return true;
  } else {
    return false;
  }
}



// Validations des champs
function validateFirst() {
  if(firstname.value == "" || firstname.value.length < 2) {
    error_first.innerHTML = "Veuillez entrer 2 caractères ou plus";
    firstname.focus();
    return false;
  } else {
    error_first.innerHTML = "";
    return true;
  }
}

function validateLast() {
  if(lastname.value == "" || lastname.value.length < 2) {
    error_last.innerHTML = "Veuillez entrer 2 caractères ou plus";
    firstname.focus();
    return false;
  } else {
    error_last.innerHTML = "";
    return true;
  }
}

function validateEmail() {
    //si la valeur du champ email est vide
    if(mail.value == "") {
      mail.focus();
      return false;
    }
  
    //si la valeur du champ email ne match pas avec mailFormat
    else if(validateRegexMail() == false) {
      error_email.innerHTML = "Veuillez entrer un email valide";
      mail.focus();
      return false;
    } else {
      return true;
    }
}

function validateBirth() {
  //si la valeur du champ birthdate est vide
  if(birth.value == "") {
    error_birth.innerHTML = "Veuillez entrer votre date de naissance";
    birth.focus();
    return false;
  } else {
    return true;
  }
}

function validateQty() {
  //si la valeur du champ quantity est vide
  if(qty.value == "") {
    error_qty.innerHTML = "Veuillez entrer le nombre de tournois auquels vous avez participé";
    qty.focus();
    return false;
  } else {
    return true;
  }
}

function validateOptions() {
  if(locations.value == '' ) {
    error_option.innerHTML = "Veuillez choisir une option";
    return false;
  } else {
    return true;
  }
}

function validateConditions() {
  if(!generalConditions.checked) {
    error_conditions.innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions";
    return false;
  } else {
    return true;
  }
}


// fonction valider
function validate() {

if (validateFirst() == true && validateLast() == true && validateEmail() == true && validateBirth() == true && validateQty() == true && validateOptions() == true && validateConditions() == true) {
  alert("Votre demande a bien été envoyée");
  return true;
} else {
  return false;
}


  // var error_last = document.querySelector(".error-last");
  // var error_birth = document.querySelector(".error-birth");
  // var error_option = document.querySelector(".error-option");
  // var error_conditions = document.querySelector(".error-conditions");
}
