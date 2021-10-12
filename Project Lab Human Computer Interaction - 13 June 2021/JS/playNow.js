function formValidation() {
    var name = document.getElementById("name").value
    if(name === "") {
        alert("Name must be filled!");
        return false;
    }

    var email = document.getElementById("email").value
    if(email === "") {
        alert("Email must be filled!");
    } else {
        if(email.indexOf("@") == -1) {
            alert("Wrong email format!");
            return false;
        } else if(email.indexOf(".") == -1) {
            alert("Wrong email format!");
            return false;
        }
    }

    var pass = document.getElementById("password").value
    if(pass === "") {
        alert("Password must be filled!");
        return false;
    } else {
        if(pass.length <= 8) {
            alert("Password is too short!");
            return false
        }
    }

    var gender = document.getElementById("gender")
    if(gender.checked === false) {
        alert("Pick your gender!");
        return false;
    }

    if(document.getElementById("terms").checked === false) {
        alert("You must agree to the Terms and Condition!");
        return false;
    }

    alert("Thank you for registering!");
    return true;
}