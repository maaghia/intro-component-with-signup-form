  //data collected
  const form = document.querySelector('#form')
  const firstName = document.querySelector("#first-name");
  const lastName = document.querySelector("#last-name");
  const email = document.querySelector("email");
  const passeword = document.querySelector("passeword");
  const button = document.querySelector("submit");
  //error messages
  const msgFirstName = document.querySelector("#fname-error");
  const msgLastName = document.querySelector("#lname-error");
  const msgEmail = document.querySelector("#email-error");
  const msgPassword = document.querySelector("#password-error");
  //error icons
  const iconFirstName = document.querySelector("#icon-firstname-error");
  const iconLastName = document.querySelector("#icon-lasstname-error");
  const iconEmail = document.querySelector("#icon-email-error");
  const iconPassword = document.querySelector("#icon-password-error");

  //invalid email function
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

  //empty input function
  function IsEmpty(data, icon, msg) {
  if (document.forms['frm'].data.value === "") {
    return false;
  }
    return true;
}
  //verify first name not empty
const submitFN=() => {
  const userFN = firstName.value; 
  const fnIcon = iconFirstName.value;
  const fnMsg = msgFirstName.value;
  if (!IsEmpty(userFN,fnIcon,fnMsg)){
      iconFirstName.style.visibility = "visible";
      msgFirstName.style.visibility = "visible";
  }
  else{
    iconFirstName.style.visibility = "hidden";
    msgFirstName.style.visibility = "hidden";
  }
}
  //verify last name not empty
  const submitLN=() => {
    const userLN = firstName.value; 
    const lnIcon = iconFirstName.value;
    const lnMsg = msgFirstName.value;
    if (!IsEmpty(userLN,lnIcon,lnMsg)){
        iconLastName.style.visibility = "visible";
        msgLastName.style.visibility = "visible";
    }
    else{
      iconLastName.style.visibility = "hidden";
      msgLastName.style.visibility = "hidden";
    }
  }
    //verify password not empty
    const submitPassword=() => {
      const userPassword = firstName.value; 
      const passwordIcon = iconFirstName.value;
      const passwordMsg = msgFirstName.value;
      if (!IsEmpty(userPassword,passwordIcon,passwordMsg)){
          iconPassword.style.visibility = "visible";
          msgPassword.style.visibility = "visible";
      }
      else{
        iconPassword.style.visibility = "hidden";
        msgPassword.style.visibility = "hidden";
      }
    }
    form.addEventListener('submit', e => {
      e.preventDefault();
      submitEmail();
      submitFN();
      submitLN();
      submitPassword();
    });