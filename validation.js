document.getElementById("form").addEventListener('submit', function(e){
    e.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById("password").value;
    let passwordVal = document.getElementById("passwordVal").value;
    let age = document.getElementById("age").value;
    let male = document.getElementById('male').checked;
    let female = document.getElementById('female').checked;
    let error_msg = document.getElementById('error_msg');
    
    const loc1 = email.indexOf("@");
    const loc2 = email.indexOf(".");
    if((loc1 < 1 || loc2 < loc1 + 2 || loc2 === email.length - 1) || email === ""){
        error_msg.innerHTML = 'Email must be a valid address'
        return;
    }

    else if(password.length < 6){
        error_msg.innerHTML = "Password must contains atleast 6 characters"
        return;
    }

    else if(!(password===passwordVal) || passwordVal === ''){
        error_msg.innerHTML = "Password must be the same!"
        return;
    }

    else if(age < 15){
        error_msg.innerHTML = "Must be above 15 years old!"
        return;
    }

    else if(!male && !female){
        error_msg.innerHTML = "Please Select a gender!"
        return;
    }

    else if(!document.getElementById("terms").checked){
        error_msg.innerHTML = "Please agree to terms and conditions"
        return;
    }

    else {
        error_msg.innerHTML = ''
        window.location.href = 'home.html'
    }
})