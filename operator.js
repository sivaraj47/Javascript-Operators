function add(){
  var a , b, c, d; 
  a = parseInt(document.getElementById("first").value);
  b = parseInt(document.getElementById("second").value);
  c =  a + b;  
  document.getElementById("answer").value = c;       
}
function sub(){
var a, b, d;
a = parseInt(document.getElementById("first").value);
b = parseInt(document.getElementById("second").value);
d = a - b;
document.getElementById("answer").value = d;
}
function mul(){
var a, b, c;
a = parseInt(document.getElementById("first").value);
b = parseInt(document.getElementById("second").value);
c = a * b;
document.getElementById("answer").value = c;
}

function div(){
var a,b,c;
a = parseInt(document.getElementById("first").value);
b = parseInt(document.getElementById("second").value);
c = a / b;
document.getElementById("answer").value = c;
}
