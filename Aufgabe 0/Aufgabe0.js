var name = "";
function box() {
    var name = prompt("Wie hei�t du?");
    var node = document.getElementById("content");
    node.innerHTML += "Herzlich Willkommen ";
    node.innerHTML += name;
    node.innerHTML += "!";
    console.log("Herzlich Willkommen", name, "!");
}
document.addEventListener('DOMContentLoaded', box);
//# sourceMappingURL=Aufgabe0.js.map