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
const form = document.querySelector('form[name="reserve"]');
const confirmationCloseBtn = document.querySelector("#btn-closed");

// Champs du formulaire
const firstname = document.querySelector("#first");
const lastname = document.querySelector("#last");
const mail = document.querySelector("#email");
const birth = document.querySelector("#birthdate");
const qty = document.querySelector("#quantity");
const locations = document.querySelectorAll('.checkbox-input[name="location"]');
const generalConditions = document.querySelector("#checkbox1");

// Erreurs du formulaire
const formDataFirst = document.querySelector("#first").parentNode;
const formDataLast = document.querySelector("#last").parentNode;
const formDataMail = document.querySelector("#email").parentNode;
const formDataBirth = document.querySelector("#birthdate").parentNode;
const formDataQty = document.querySelector("#quantity").parentNode;
const formDataLocation = document.querySelector("#location1").parentNode;
const formDataConditions = document.querySelector("#checkbox1").parentNode;
const numbersQty = /[0-9]/;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeModalBtn[0].addEventListener("click", closeModal);

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
    confirmationValidation.style.display = "none";
}

// close modal form
function closeModal() {
    modalbg.style.display = "none";
    form.style.display = "block";
    confirmationValidation.style.display = "none";
}

// Modal de confirmation
const confirmationValidation = document.querySelector("#confirm-modal");

// Envoi du formulaire

form.addEventListener("submit", function (e) {
    e.preventDefault();
    validate();
});

// Validations des champs
function validateFirst(firstname) {
    if (firstname.value == "") {
        formDataFirst.setAttribute(
            "data-error",
            "Veuillez entrer votre prénom"
        );

        formDataFirst.setAttribute("data-error-visible", "true");

        return false;
    } else if (firstname.value.length < 2) {
        formDataFirst.setAttribute(
            "data-error",
            "Veuillez entrer 2 caractères ou plus"
        );

        formDataFirst.setAttribute("data-error-visible", "true");

        return false;
    } else {
        formDataFirst.removeAttribute("data-error");
        formDataFirst.removeAttribute("data-error-visible");
        return true;
    }
}

function validateLast(lastname) {
    if (lastname.value == "" || lastname.value.length < 2) {
        formDataLast.setAttribute(
            "data-error",
            "Veuillez entrer 2 caractères ou plus"
        );
        formDataLast.setAttribute("data-error-visible", "true");
        return false;
    } else {
        formDataLast.removeAttribute("data-error");
        formDataLast.removeAttribute("data-error-visible");
        return true;
    }
}

function validateEmail(mail) {
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,3}$/.test(mail.value)) {
        formDataMail.setAttribute(
            "data-error",
            "Veuillez entrer une adresse email valide"
        );
        formDataMail.setAttribute("data-error-visible", "true");
        return false;
    } else {
        formDataMail.removeAttribute("data-error");
        formDataMail.removeAttribute("data-error-visible");
        return true;
    }
}

function validateBirth16(birth) {
    const todayDate = new Date();
    todayDate.setFullYear(todayDate.getFullYear() - 16);

    const birthDateEntry = new Date(birth.value);

    if (
        todayDate < birthDateEntry ||
        !birth.value.match(
            /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/
        )
    ) {
        formDataBirth.setAttribute(
            "data-error",
            "Vous devez entrer votre date de naissance et avoir plus de 16 ans pour participer"
        );
        formDataBirth.setAttribute("data-error-visible", "true");
        return false;
    } else {
        formDataBirth.removeAttribute("data-error");
        formDataBirth.removeAttribute("data-error-visible");
        return true;
    }
}

function validateQtyParse(qty) {
    const parsed = parseInt(qty.value);
    console.log(parsed);
    //si la valeur du champ quantity est vide
    if (isNaN(parsed) || qty.value == "") {
        formDataQty.setAttribute(
            "data-error",
            "Veuillez entrer le nombre de tournois auxquels vous avez participé (sous forme de nombre)"
        );
        formDataQty.setAttribute("data-error-visible", "true");
        return false;
    } else {
        formDataQty.removeAttribute("data-error");
        formDataQty.removeAttribute("data-error-visible");
        return true;
    }
}

function validateOptions(locations) {
    let locChecked = 0;
    locations.forEach((i) => {
        if (i.checked) {
            locChecked++;
        }
    });

    if (locChecked === 0) {
        formDataLocation.setAttribute(
            "data-error",
            "Vous devez choisir une option"
        );
        formDataLocation.setAttribute("data-error-visible", "true");
        return false;
    } else {
        formDataLocation.removeAttribute("data-error");
        formDataLocation.removeAttribute("data-error-visible");
        return true;
    }
}

function validateConditions(generalConditions) {
    if (!generalConditions.checked) {
        formDataConditions.setAttribute(
            "data-error",
            "Vous devez vérifier que vous acceptez les termes et conditions"
        );
        formDataConditions.setAttribute("data-error-visible", "true");
        return false;
    } else {
        formDataConditions.removeAttribute("data-error");
        formDataConditions.removeAttribute("data-error-visible");
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
    isFormValidate.push(validateBirth16(birth));
    isFormValidate.push(validateQtyParse(qty));
    isFormValidate.push(validateOptions(locations));
    isFormValidate.push(validateConditions(generalConditions));

    if (!isFormValidate.includes(false)) {
        form.style.display = "none";
        confirmationValidation.style.display = "flex";
    }

    // fermer le message de validation
    document.querySelector("#btn-closed").addEventListener("click", closeModal);
}
