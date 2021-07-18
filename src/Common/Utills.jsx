import {reOnlyAlpha} from './Constants';
import validator from 'validator';

// na
export const validateUserName = (name) => {
    const n = typeof name === "string" ? name.trim() :"";
 if (!value){
     return "Name is required ";
 } else if (value.length < 3)
    {
        return "Name should atleast be 3 chracters"
    } else if (reOnlyAlpha.test(value)) {
        return "Name should only contains alphebets"
    }
    return "";

};
// email validation
export const validateEmail = (e) => {
    const [emailError, setEmailError] = useState('')
    
        var email = e.target.value
      
        if (validator.isEmail(email)) {
          setEmailError('Valid Email 👍')
        } else {
          setEmailError('Enter valid Email!')
        }
        return "";
      };
       // password validation
  const validatePassword = (value) => {
    const [errorMessage, setErrorMessage] = useState('')
    setPassword(value)
    if (validator.isStrongPassword(value, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1
    })) {
      setErrorMessage('Password Is Strong 👍')
    } else {
      setErrorMessage('Password Is Not Strong!')
    }
    return "";
  };