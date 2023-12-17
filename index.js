let academics = document.getElementById("academic");
let admission = document.getElementById("admission");
let campus = document.getElementById("campus");

let popUp = document.getElementById("popUp");

academics.addEventListener("mouseenter",()=>{
    popUp.style.visibility = "visible";

});
academics.addEventListener("mouseout",()=>{
    popUp.style.visibility = "hidden";

});

admission.addEventListener("mouseenter",()=>{
    popUp.style.visibility = "visible";

});
admission.addEventListener("mouseout",()=>{
    popUp.style.visibility = "hidden";

});


campus.addEventListener("mouseenter",()=>{
    popUp.style.visibility = "visible";

});
campus.addEventListener("mouseout",()=>{
    popUp.style.visibility = "hidden";

});

