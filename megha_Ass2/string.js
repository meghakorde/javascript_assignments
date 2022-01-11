
function form_output() {
    var email = document.getElementById('Email_id').value;
    var first_name = document.getElementById('first_name').value;
    var last_name = document.getElementById('last_name').value;
    var age = document.getElementById('age').value;
    age = parseInt(age);

    document.getElementById('emailid').innerHTML = email;
    document.getElementById('firstname').innerHTML= first_name.charAt(0).toUpperCase() + first_name.slice(1);
    document.getElementById('lastname').innerHTML= last_name.charAt(0).toUpperCase() + last_name.slice(1);
    var age_result= document.getElementById("age");
    if (age == '') {
        alert("Please enter the age");
    }
    else if (age > 10) {
        alert("You are genuis");
    }
    else {
        alert( "You are kid");   
    }
}
