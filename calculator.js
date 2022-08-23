function display(x) {
    document.getElementById("calinput").value += x;

}
function clearscreen() {
    document.getElementById("calinput").value = "";
}
function backspace(){
    var a=document.getElementById("calinput").value;
    document.getElementById("calinput").value= a.substr(0,a.length-1);
    
}
function solve(){
    var a=document.getElementById("calinput").value;
    var b=eval(a);
    document.getElementById("calinput").value=b;
}