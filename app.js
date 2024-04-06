function deleteBtn (){
document.getElementById('myResult').value= '';
}

function calculator(NewValue){
document.getElementById('myResult').value += NewValue;
}

function answere(){
let a = document.getElementById('myResult').value;
let b= eval(a);
document.getElementById('myResult').value= b;
}