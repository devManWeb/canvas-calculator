"use strict";

function closure_keys_memory(){
    let current_string = "";
    let memory_string = "";
    let last_operation;

    return {
        data_from_numeric_keys(str_val){  //update only the current string
            if(!((current_string.indexOf('.') > -1) && (str_val == "."))) { //only one point
                if((str_val == ".") && (current_string == "")){
                    current_string = "0" + str_val;
                    this.only_display(current_string);
                } else {
                    current_string = current_string + str_val;
                    this.only_display(current_string);
                }
            }
        },
    	only_display(str){ //used to compose numbers on the canvas
    		display.clear_screen();
            let str_copy = str.replace(/\./g, ''); //string passed char by char without the point
    		for(let i=0;i<str_copy.length;i++){
    			display.screen_drawer(str_copy[str_copy.length - i - 1], i);
            }
            for(let l=0;l<str.length;l++){
                if(str[l] == "."){
                    display.float_number(str.length - l); //this difference is necessary to move the point
                }
            }
    	},
        add(){
    		last_operation = function(){
                return String(Number(memory_string) + Number(current_string));
            }
    		this.result();
        },
        subtract(){
            last_operation = function(){
                return String(memory_string - current_string);
            }
    		this.result();
        },
        multiply(){
            last_operation =  function(){
                return String(memory_string * current_string);
            }
    		this.result();
        },
        divide(){
            last_operation = function(divide1,divide2){
                return String(memory_string / current_string);
            }
    		this.result();
        },
        result(){
            try{
                if(memory_string == ""){ //if we had just started typing
                    memory_string = current_string;
            		current_string = "";
                    this.only_display(memory_string);
                } else if(memory_string != 0){
                    memory_string = last_operation();
                    if(memory_string.length > 10){ //if the number can't be contained in the canvas
                       current_string = "";
                       memory_string = "";
                       this.only_display("E")
                   } else {
                        current_string = "";
                        this.only_display(memory_string);
                    }
                }
            } catch(e){ //display an "E" if we have an invalid operation
                current_string = "";
                memory_string = "";
                this.only_display("E");
            }
        },
        clear_entry(){
    		current_string = "";
    		this.only_display("0");
        },
        clear_calculator(){
    		current_string = "";
    		memory_string = "";
    		this.only_display("0");
        },
        backspace(){
    		current_string = current_string.slice(0, -1);  //remove last char from right
    		this.only_display(current_string);
            if(current_string == ""){
                this.only_display("0");
            }
        }
    }
}
