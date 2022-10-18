// to  show the expression 
function display(value){
    document.getElementById('textarea').value+=value;
}

//to calculate the value
function calculate(){
    var value=document.getElementById('textarea').value
    var ans=eval(value)
    document.getElementById('textarea').value=ans
}
// to clear the textarea
function clr(){
    document.getElementById('textarea').value=''
}