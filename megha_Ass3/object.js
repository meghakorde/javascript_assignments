var intern = {
    firstname: "Megha",
    lastname: "Korde",
    designation: "Intern Consulting",
    contact:8857860525,
    address: {
        house_no: 61,
        house_details: "Maa Bamleshwari layout, Prakash Nagar, Zingabai Takli",
        city_name: "Nagpur",
        pin_code:440030,
        country: "India",
    }
};
document.getElementById("intern").innerHTML = "My name is " + " " +intern.firstname + " " + intern.lastname + " . " + "My designation is " + 
                                              intern.designation + " ." + "You can contact me on "+ intern.contact +" . " +"My address is plot no. " +
                                              intern.address.house_no + " , " +  intern.address.house_details + " , " + intern.address.city_name + 
                                              " , " + intern.address.pin_code +" , " +  intern.address.country +" .";