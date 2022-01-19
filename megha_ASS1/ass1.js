function check(){
var price = document.getElementById('input').value;   
var p ;
if (price >=35){
    p = price-35;
    alert("Ashish purchased Grocery and Ice-cream, the amount left is " + p);
}
else if(price >= 20){
    alert("Ashish purchased Grocery,He can also buy Ice-cream")
}
else if(price==" "){
    alert("please enter some amount to purchase the Grocery")
}
else{
    alert("Ashish can't buy Grocery and ice-cream, The minimum amount is 20Rs")
};
};