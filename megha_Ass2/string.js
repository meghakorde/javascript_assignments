function form_output() {
    var email = document.getElementById('Email_id').value;
    var first_name = document.getElementById('first_name').value;
    var last_name = document.getElementById('last_name').value;

    document.getElementById('emailid').innerHTML = email;
    document.getElementById('firstname').innerHTML= first_name.charAt(0).toUpperCase() + first_name.slice(1);
    document.getElementById('lastname').innerHTML= last_name.charAt(0).toUpperCase() + last_name.slice(1);
}
function age_output() {
    var age = document.getElementById('age').value;
    if (age == '') {
        alert("Please enter the age");
    }
    else if (age > 10) {
        alert("You are genuis");
    }
    else {
        alert("You are kid");   
    }
}