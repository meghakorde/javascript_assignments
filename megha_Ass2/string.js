
var result = document.getElementById('form_output');
result.addEventListener("submit",function(e){
    e.preventDefault();
    var email = e.target.Email_id.value;
    var first_name =  e.target.first_name.value;
    var last_name =  e.target.last_name.value;
    var age = e.target.age.value;
 
    document.getElementById('emailid').innerHTML = email;
    document.getElementById('firstname').innerHTML= first_name.charAt(0).toUpperCase() + first_name.slice(1);
    document.getElementById('lastname').innerHTML= last_name.charAt(0).toUpperCase() + last_name.slice(1);
    if (age > 10) {
     document.getElementById('age_result').innerHTML="You are genuis";
    }
    else if (age < 10) {
      document.getElementById('age_result').innerHTML="you are kid";
    }
    else {
      document.getElementById('age_result').innerHTML=" Please enter the age ";   
    } 
   
}) 
