// Fahad Mohammed
// 03/10/2021
// Part b
 function reset(){//this creates a function for resetting the values and the result boxes
    document.getElementById('op1').value = "";//this clears the value for the text field
    document.getElementById('op2').value= "";//this clears the value for the text field
    document.getElementById('res').value= "";//this clears the value for the text field
}
function op(){//this is a function which performs all the calculation based on the selected radio button
    var op1 = document.getElementById('op1').value;
    var op2 = document.getElementById('op2').value;
    var op = document.querySelector('input[name="operation"]:checked').value;
    if(op=='+')//if the add radio button is selected this function will add the values in both text fields
            document.getElementById('res').value= parseFloat(op1)+parseFloat(op2);
    else if(op=='*')//if the multiply radio button is selected this function will multiply the values in both text fields
            document.getElementById('res').value= parseFloat(op1)*parseFloat(op2);
    else if(op=='-')//if the subtract radio button is selected this function will subtract the values in both text fields
            document.getElementById('res').value= parseFloat(op1)-parseFloat(op2);
    else if(op=='/')//if the divide radio button is selected this function will divide the values in both text fields
            document.getElementById('res').value= parseFloat(op1)/parseFloat(op2);
 }

 function init ( ) {//this function resets all the values in the text fields by clicking it
         var button = document.getElementById("btn");//creates a button value
         button.addEventListener("click", reset);//resets the values when clicked
 }
 window.onload = init;//loads the page