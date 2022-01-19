var slides = [
    {
        id:1,
        name:"Simon Jon",
        desig:"Manager",
        text:" Dolor Lorem ipsum  sit, amet consectetur adipisicing elit. Accusantium reiciend perferendis sapiente illo aliquid.",
        img: 'imges/2.jpg',
    },
    {
        id:2,
        name:"Sulo Sinha",
        desig:"Technocal Head",
        text:" Amet consectetur adipisicing elit Lorem ipsum dolor sit,. Accusantium reiciend perferendis sapiente illo aliquid.",    
        img: 'imges/4.jpg',
    },
    {
        id:3,
        name:"Leo Warn",
        desig:"QA INtern",
        text:" Ipsum dolor sit, amet  Lorem consectetur adipisicing elit. Accusantium reiciend perferendis sapiente illo aliquid.",    
        img: 'imges/5.jpg',
    },
    {
        id:4,
        name:"Lorra Benten",
        desig:"Java INtern",
        text:"Accusantium reiciend perferendis Ipsum dolor sit, amet  Lorem consectetur adipisicing elit.  sapiente illo aliquid.",    
        img: 'imges/3.jpg',
}
];
var img =document.getElementById("img1");
var author =document.getElementById("author_name");
var des =document.getElementById("designation");
var info =document.getElementById("info");
var prevBtn = document.querySelector(".prev");
var nextBtn = document.querySelector(".next");

var currentItem =0;
// first item
window.addEventListener("DOMContentLoaded", function (){
   showslide(currentItem);
});

// load the author info 
function showslide(slide){
    var item = slides[slide];
    images.src = item.img;
    author.textContent = item.name;
    des.textContent = item.desig;
    info.textContent = item.text;
}
//previous btn
prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem < 0){
        currentItem=slides.length-1;
    }
    showslide(currentItem);
});
// next btn
nextBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem > slides.length-1){
        currentItem=0;
    }
    showslide(currentItem);
});

//form

var inpform = document.querySelector("#mainform");
inpform.addEventListener("submit", function(e){
    e.preventDefault();
    var inpname = e.target.name.value;
    var desg = e.target.designation.value;
    var disc = e.target.discription.value;

    slides.push({
         name : inpname,
         desig: desg,
         text : disc,
         img : "imges/6.jpg"
    });
    alert("user addes successfully ");
    
});