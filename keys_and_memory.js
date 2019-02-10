"use strict";

function closure_keys_memory(){
    let current_string = "";
    let memory_string = "";
    let last_operation;

    function char_checker(char){
        let temp = 0;
        for(let i=0;i<current_string.length;i++){
            if(char == current_string[i]){
                temp++;
            }
        }
        if( temp > 1) {
            return false;
        } else {
            return true;
        }
    }

    return {
        data_from_numeric_keys(str_val){  //update only the current string
            console.log(str_val);
            //if( char_checker(".") && (str_val != ".")){ //only one float
            if((str_val == ".") && (current_string == "")){
                current_string = "0" + str_val;
                this.only_display(current_string);
            } else {
                current_string = current_string + str_val;
                this.only_display(current_string);
            }
            //}
        },
    	only_display(str){ //used to compose numbers on the canvas
    		display.clear_screen();
    		for(let i=0;i<str.length;i++){
    			display.screen_drawer(str[str.length - i - 1],i);
    		}
    	},
        add(){
    		last_operation = function(add1,add2){
                return String(Number(add1) + Number(add2));
            }
    		this.result();
        },
        subtract(){
            last_operation = function(minus1,minus2){
                return String(Number(minus1) - Number(minus2));
            }
    		this.result();
        },
        multiply(){
            last_operation = function(multiply1,multiply2){
                return String(Number(multiply1) * Number(multiply2));
            }
    		this.result();
        },
        divide(){
            last_operation = function(divide1,divide2){
                return String(Number(divide1) / Number(divide2));
            }
    		this.result();
        },
        result(){
            try{
                memory_string = last_operation(current_string,memory_string);
        		current_string = "";
                if(memory_string != 0){
                    this.only_display(memory_string);
                }else {
                    this.only_display("0");
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
    		current_string = current_string.slice(0, -1);
    		this.only_display(current_string);
        }
    }
}
