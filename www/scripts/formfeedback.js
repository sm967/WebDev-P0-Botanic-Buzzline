$(document).ready(function() {
  console.log("running");
  $("#contactForm").on("submit", function() {

    var formValid = true;
    // Validation for Name inputted
    var nameValid = $("#name").prop("validity").valid;
    if(nameValid){
      $("#nameError").addClass("hidden");
      $("#fullname").addClass("standard-background");
      console.log("Valid Name");
    } else{
      formValid = false;
      $("#nameError").removeClass("hidden")
      $("#fullname").removeClass("standard-background");
      console.log("Invalid Name");
    }

    //Check if email is valid
    var validemail = $("#userEmail").prop("validity").typeMismatch;
    console.log(validemail, "valid email")
    if (validemail){
      console.log("!!!!")
      console.log("invalid email")
      $("#invalemailerror").removeClass("hidden");
      $("#emailbackground").removeClass("standard-background");
      console.log("remove valid email standard background");
      $("#emailbackground").addClass("error-background");
      console.log("invalid email")
      formValid = false;
    } else{
      console.log("invalid email")
      $("#invalemailerror").addClass("hidden");
      $("#emailbackground").removeClass("error-background");
      $("#emailbackground").addClass("standard-background");
    }

    // Validation for email
    //Check if email is empty
    var missingemail = $("#userEmail").prop("validity").valueMissing;
    console.log(missingemail)
    if (missingemail){
      $("#noemailerror").removeClass("hidden");
      $("#emailbackground").removeClass("standard-background");
      $("#emailbackground").addClass("error-background");
      formValid = false;
      console.log("Missing Email");
    } else{
      $("#noemailerror").addClass("hidden");
      $("#emailback").addClass("standard-background");
      console.log("Email is There")
    }

    // //Check if email is valid
    // var validemail = $("#userEmail").prop("validity").typeMismatch;
    // console.log(validemail, "valid email")
    // if (validemail){
    //   console.log("!!!!")
    //   console.log("invalid email")
    //   $("#invalemailerror").removeClass("hidden");
    //   $("#emailbackground").removeClass("standard-background");
    //   console.log("remove valid email standard background");
    //   $("#emailbackground").addClass("error-background");
    //   console.log("invalid email")
    //   formValid = false;
    // } else{
    //   console.log("invalid email")
    //   $("#invalemailerror").addClass("hidden");
    //   $("#emailbackground").removeClass("error-background");
    //   $("#emailbackground").addClass("standard-background");
    // }



    if (formValid){
      $("#submiterror").addClass("hidden");
    } else{
      console.log("Form valid is entirely false")
      formValid = false;
      $("#submiterror").removeClass("hidden");
      $("#emailbackground").removeClass("standard-background");
    }


    return formValid;

  });
});
