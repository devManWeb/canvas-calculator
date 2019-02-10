"use strict";

//Declarations
const display = closure_canvas();
const calculator = closure_keys_memory();
const sound = closure_sound();

//first drawing of the screen
display.clear_screen();

//Start with the zero on the screen
calculator.only_display("0");

//Event delegation for the numbers with sounds
document.getElementById("numeric_keys").addEventListener("click",function(e) {
    if(e.target && e.target.nodeName == "BUTTON") {
        //Compose string in memory and draw it
         calculator.data_from_numeric_keys(e.target.textContent);
         sound.numeric_key();
    }
});

//Event delegation for the service keys (sounds)
document.getElementById("service_keys").addEventListener("click",function(e) {
    if(e.target && e.target.nodeName == "BUTTON") {
        sound.service_key();
    }
});

//Event delegation for the operation keys (sounds)
document.getElementById("operation_keys").addEventListener("click",function(e) {
    if(e.target && e.target.nodeName == "BUTTON") {
        sound.operation_key();
    }
});
