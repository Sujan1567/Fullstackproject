//making the validation function for the login which take the values as the parameters.
const validation = (values) => {
    //Making the empty object with the name error.
    let error = {}

    //Making the variables for arranging the pattern for the email address and password. 
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/


    //making the condition for the entering the name for the users.
    if (values.name === "") {
        error.name = "Name shouldn't be empty"
    }
    else {
        error.name = ""
    }

    //Making the condition for the email address for the users.
    if (values.email === "") {
        error.email = "Email shouldn't be empty"
    }

    else if (!email_pattern.test(values.email)) {
        error.email = "Email Didn't match"
    }
    else {
        error.email = ""
    }

    //Making the condition for the Phone number entered by the users.
    if (values.phonenumber === "") {
        error.phonenumber = "Phonenumber shouldn't be empty"
    }
    else {
        error.phonenumber = ""
    }

    //Making the condition for the address entered by the users.
    if(values.address === ""){
        error.address = "address shouldn't be empty"
      }
      else{
          error.address = ""
      }



    //Making the condition for the creating the password for the users.
    if (values.createpassword === "") {
        error.createpassword = "password should be strong"
    }
    else if (!password_pattern.test(values.createpassword)) {
        error.createpassword = "Password didn't match with the pattern"
    }
    else {
        error.createpassword = ""
    }

    //Making the condition for the confirmation of the password.
    if (values.confirmpassword === "") {
        error.confirmpassword = "password should be same as the above password"
    }
    else if (!password_pattern.test(values.confirmpassword)) {
        error.confirmpassword = "Password didn't match with the above password"
    }
    else {
        error.confirmpassword = ""
    }

    //Returning the updated error object.
    return error;


}

export default validation;
