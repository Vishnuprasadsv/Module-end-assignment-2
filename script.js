
document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signupForm");
  const fullName = document.getElementById("fullName");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");
  const termsCheckbox = document.getElementById("terms");
  const mainForm = document.getElementById("mainForm");
  const mainBody = document.getElementById("mainBody");
  const signIn = document.getElementById("signIn");
  const termsConditions = document.getElementById("termsConditions");

  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let validation = true;

    console.log(fullName.value);

    // name validation
    // used bootstrap validation classes
    if (fullName.value.trim() === "") {
       // adding the is-valid class 
      fullName.classList.add("is-invalid");
      validation = false;
    } else {
      // removing the class
      fullName.classList.remove("is-invalid");
      fullName.classList.add("is-valid");
    }

    // email validation
    // email validation symbols
    const emailsymbols = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // checking if the email matches the pattern in emailsymbols
    if (!emailsymbols.test(email.value.trim())) {
      // adding the is-valid class  
      email.classList.add("is-invalid");
      validation = false;
    } else {
      // removing the class
      email.classList.remove("is-invalid");
      email.classList.add("is-valid");
    }

    // password validation
    if (password.value.trim().length < 6) {
      // adding the is-valid class
      password.classList.add("is-invalid");
      validation = false;
    } else {
      // removing the class
      password.classList.remove("is-invalid");
      password.classList.add("is-valid");
    }

    // confirm validation
    if (
      password.value !== confirmPassword.value ||
      confirmPassword.value === ""
    ) {
      // adding the is-valid class
      confirmPassword.classList.add("is-invalid");
      validation = false;
    } else {
      // removing the class
      confirmPassword.classList.remove("is-invalid");
      confirmPassword.classList.add("is-valid");
    }

    // terms check box

    if (!termsCheckbox.checked) {
      // adding the is-valid class
      termsCheckbox.classList.add("is-invalid");
      validation = false;
    } else {
      // removing the class
      termsCheckbox.classList.remove("is-invalid");
    }

    // checking if all the validation is done
    if (validation) {
      if (mainForm) {
        // remove existing sign up form
        mainForm.remove();
      }
      // adding successful box
      let confirmation = document.createElement("div");
      confirmation.className = "confirm_box";
      confirmation.innerHTML =
        '<div class="d-flex flex-column align-items-center justify-content-center"><h4 class="text-white">✅ Sign Up Successful!</h4><button style="width: 50px; height: 40px; border: none;" class="bg-primary rounded-2 mt-4" id="resetbtn">ok</button></div>';
      document.body.appendChild(confirmation);
      // to get sign up form
      document.querySelector("#resetbtn").addEventListener("click", () => {
        mainBody.appendChild(mainForm);
        confirmation.remove();
        signupForm.reset();
      });
    } else {
      form.classList.add("was-validated");
    }
  });

  // SignIn

  signIn.addEventListener("click", () => {
    // console.log("signin working");
    mainForm.remove();
    // creating new element 
    let noaccount = document.createElement("div");
    noaccount.className = "confirm_box";
    noaccount.innerHTML =
      '<div class="d-flex flex-column align-items-center justify-content-center"><h4 class="text-white">⚠️ Please Create a new Account !</h4><button style="width: 90px; height: 40px; border: none;" class="bg-primary rounded-2 mt-4 text-white " id="noresetbtn">Sign Up</button></div>';
    document.body.appendChild(noaccount);
    // adding click event to the button
    document.querySelector("#noresetbtn").addEventListener("click", () => {
      noaccount.remove();
      mainBody.appendChild(mainForm);
      signupForm.reset();
    });
  });

  // Terms & Conditions
  termsConditions.addEventListener("click", () => {
    // console.log("terms and condition");
    mainForm.remove();
    let termsAndConditions = document.createElement("div");
    termsAndConditions.className = "confirm_box";
    termsAndConditions.innerHTML =
      '<body style="background-color: black;"><div class="d-flex flex-column align-items-center justify-content-center gap-2"><h4 class="text-white"><img src="./assets/terms (1).png" alt="terms"> Terms & conditions</h4><ul class="text-white" style="list-style-type: decimal;"><li class="mb-2"> Account Responsibility – You are responsible for maintaining <br> the confidentiality of your account details and password.</li><li class="mb-2"> Accurate Information – You agree to provide true , <br> accurate, and complete information during signup.</li><li class="mb-2"> Use of Services – You must not use your <br> account for any illegal or unauthorized purposes.</li><li class="mb-2"> Privacy Protection – Your personal information will be <br> handled in accordance with our Privacy Policy.</li><li > Account Termination – We reserve the right to suspend <br> or terminate accounts that violate these terms.</li></ul><button style="width: 80px; height: 40px; border: none;" class="bg-primary rounded-2 mt-4 text-white fw-bold" id="noresetbtn">I Agree</button></div>';
    document.body.appendChild(termsAndConditions);

    document.querySelector("#noresetbtn").addEventListener("click", () => {
      termsAndConditions.remove();
      mainBody.appendChild(mainForm);
      signupForm.reset();
    });
  });
});
