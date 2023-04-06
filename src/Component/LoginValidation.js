function Validation(values){
let error = {}

 const UsernName_pattern = /^[a-zA-Z\-\1-9]+$/
 const password_pattern = /^[a-zA-Z\-\1-9]+$/

    if(values.UserName === ""){
        error.UserName = "UserName Should Not Be Empty"
    }
    else if(!UsernName_pattern.test(values.UserName)){
        error.UserName = "UserName Didn't Match"
    } else {
        error.UserName=""
    }


    if(values.password ===""){
        error.password= "password Should Not Be Empty"
    }
    else if(!password_pattern.test(values.password)){
        error.password = "password Didn't Match"
    } else {
        error.password=""
    }
    return error;
}

export default Validation;