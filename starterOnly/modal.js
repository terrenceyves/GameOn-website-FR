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
const formValid = document.querySelector("#btn-submit");
const form = document.querySelector('form[name="reserve"]')

// Champs du formulaire
const firstname = document.querySelector("#first");
const lastname = document.querySelector("#last");
const mail = document.querySelector("#email");
const birth = document.querySelector("#birthdate");
const qty = document.querySelector("#quantity");
const locations = document.querySelectorAll('.checkbox-input[name="location"]');
const generalConditions = document.querySelector("#checkbox1");

// Span d'erreur du formulaire
const error_first = document.getElementById("error-first");
const error_last = document.getElementById("error-last");
const error_email = document.getElementById("error-email");
const error_birth = document.getElementById("error-birth");
const error_qty = document.getElementById("error-qty");
const error_option = document.getElementById("error-option");
const error_conditions = document.getElementById("error-conditions");
const numbersQty = /[0-9]/;

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

// Envoi du formulaire

form.addEventListener('submit', function (e) {
  e.preventDefault();
  validate();
});


// Validations des champs
function validateFirst(firstname) {
  if (firstname.value == "" || firstname.value.length < 2) {
    error_first.style.display = 'inline';
    error_first.innerHTML = "Veuillez entrer 2 caractères ou plus";
    firstname.style.border = 'solid red 2px';
    return false;
  } else {
    error_first.style.display = "none";
    firstname.style.border = '3px solid #279e7a';
    return true;
  }
}

function validateLast(lastname) {
  if (lastname.value == "" || lastname.value.length < 2) {
    error_last.style.display = 'inline';
    error_last.innerHTML = "Veuillez entrer 2 caractères ou plus";
    lastname.style.border = 'solid red 2px';
    return false;
  } else {
    error_last.style.display = 'none';
    lastname.style.border = '3px solid #279e7a';
    return true;
  }
}

function validateEmail(mail) {
  if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,3}$/.test(mail.value)) {
    error_email.style.display = "inline"
    error_email.innerHTML = "Veuillez entrer une adresse mail valide";
    mail.style.border = 'solid red 2px';
    return false;
  } else {
    error_email.style.display = 'none';
    mail.style.border = '3px solid #279e7a';
    return true;
  }
}

function validateBirth(birth) {
  //si la valeur du champ birthdate est vide
  if (!birth.value.match(/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/)) {
    error_birth.style.display = "inline";
    error_birth.innerHTML = "Veuillez entrer votre date de naissance";
    birth.style.border = 'solid red 2px';
    return false;
  } else {
    error_birth.style.display = 'none';
    birth.style.border = '3px solid #279e7a';
    return true;
  }
}

function validateQty(qty) {
  //si la valeur du champ quantity est vide
  if (!qty.value.match(numbersQty)) {
    error_qty.style.display = "inline";
    error_qty.innerHTML = "Veuillez entrer le nombre de tournois auquels vous avez participé";
    qty.style.border = 'solid red 2px';
    return false;
  } else {
    error_qty.style.display = 'none';
    qty.style.border = '3px solid #279e7a';
    return true;
  }
}

function validateOptions(locations) {
  let locChecked = 0;
  locations.forEach(i => {
    if (i.checked) {
      locChecked++;
    }
  })

  if (locChecked === 0) {
    error_option.style.display = "inline";
    error_option.innerHTML = "Veuillez choisir une option";
    return false;
  } else {
    error_option.style.display = "none";
    return true;
  }
}

function validateConditions(generalConditions) {
  if (!generalConditions.checked) {
    error_conditions.style.display = "inline";
    error_conditions.innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions";
    return false;
  } else {
    error_conditions.style.display = "none";
    return true;
  }
}


// fonction valider
function validate() {
  // ne pas oublier de déclarer une variable
    let isFormValidate = [];
  
    isFormValidate.push(validateFirst(firstname));
    isFormValidate.push(validateLast(lastname));
    isFormValidate.push(validateEmail(mail));
    isFormValidate.push(validateBirth(birth));
    isFormValidate.push(validateQty(qty));
    isFormValidate.push(validateOptions(locations));
    isFormValidate.push(validateConditions(generalConditions));
  
    if (!isFormValidate.includes(false)) {
        alert("Merci ! Votre réservation a été reçue.")
    }
  }