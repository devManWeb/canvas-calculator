"use strict";

//Declarations
const display = closure_canvas();
const calculator = closure_keys_memory();

//first drawing of the screen
display.clear_screen();

//Start with the zero on the screen
calculator.only_display("0");

//Event delegation for the keys
document.getElementById("numeric_keys").addEventListener("click",function(e) {
    if(e.target && e.target.nodeName == "BUTTON") {
        //Compose string in memory and draw it
         calculator.data_from_numeric_keys(e.target.textContent);
    }
});
/*
document.getElementById("service_keys").addEventListener("click",function(e) {
    if(e.target && e.target.nodeName == "BUTTON") {
    }
});

document.getElementById("operation_keys").addEventListener("click",function(e) {
    if(e.target && e.target.nodeName == "BUTTON") {
    }
});
*/
