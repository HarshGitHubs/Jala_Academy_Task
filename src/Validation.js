export default function Validation(values){
    let errors = {}

    const email_pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    if(values.fname === ""){
        errors.fname = "Required"
    }

    if(values.email === ""){
        errors.email = "Required"
    }else if(!email_pattern.test(values.email)){
        errors.email = "please enter correct email"
    }

    if(values.lname === ""){
        errors.lname = "Required"
    }

    if(values.mobile === null){
        errors.mobile = "Required"
    }else if(values.mobile.length === 0){
        errors.mobile = "10 digits required"
    }

    return errors;
}