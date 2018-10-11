
    
    var name:string ="";
    function box(){
        var name = prompt ("Wie heiﬂt du?");
        var node:HTMLElement= document.getElementById("content");
        node.innerHTML += "Herzlich Willkommen ";
        node.innerHTML += name;
        node.innerHTML += "!";
        console.log("Herzlich Willkommen",name,"!")
       } 
        
document.addEventListener('DOMContentLoaded',box); 
