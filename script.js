const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("email");
const msgEmail = document.querySelector("#email-error");
const iconEmail = document.querySelector("#email-icon");
const passeword = document.querySelector("passeword");
const button = document.querySelector("submit");
const iconFirstName = document.querySelector("#first-name");
const iconLastName = document.querySelector("#last-name");
const iconPassword = document.querySelector("#icon-passeword-error");
  //invalid email
function ValidateEmail(mail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mail.match(mailformat)) {
      return true;
    } 
    else {
      return false;
    }
  }

  const submitEmail=() => {
    const userInput = email.value; 
    if (!ValidateEmail(userInput)){
        iconEmail.style.visibility = "visible";
        msgEmail.style.visibility = "visible";
    }
    else{
        iconEmail.style.visibility = "hidden";
        msgEmail.style.visibility = "hidden";
    }
  }
  //empty input
  function IsEmpty(data) {
  if (document.forms['frm'].data.value === "") {
    return false;
  }
    return true;
}

