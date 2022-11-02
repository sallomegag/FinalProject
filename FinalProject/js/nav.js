const nav = ["home", "about", "contact", "location"];

 const links = ["index.html", "about.html",  "contact.html", "location.html"];

 let navigaciatext = "<ul>";
 for(let i=0; i<nav.length; i++){
     navigaciatext  += '<li><a href="'+ links[i] + '">' + nav[i] +"</a></li>";


 }

 navigaciatext += "</ul>";


 document.getElementById("navig").innerHTML = navigaciatext;



 
 