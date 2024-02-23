//making the validation function for the login which take the values as the parameters.
const validation = (values)=>{
  //Making the empty object with the name error.
  let error= {}

  //Making the variables for arranging the pattern for the email address and password. 
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

  
 //making the condition for the entering of the email address for the users.
  if(values.email === ""){
    error.email = "Email shouldn't be empty"
  }

  else if(!email_pattern.test(values.email)){
    error.email= "Email Didn't match"
  }
  else{
    error.email = ""
  }

  //Making the condition for the entering the password for the users.
  if(values.password=== ""){
    error.password = "password should not be empty"
  }
  else if(!password_pattern.test(values.password)){
    error.password = "Password didn't match"
  }
  else{
    error.password = ""
  }
  //Returning the updated error object.
  return error;
  

}

export default validation;
