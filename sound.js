"use strict";

function closure_sound(){

    function generate_beep(frequency){
        //used to generate a beep with a precise frequency
        let context = new AudioContext();
        let oscillator = context.createOscillator();
        oscillator.type = "square";
        oscillator.frequency.value = frequency;
        oscillator.connect(context.destination);
        let current_time = context.currentTime;
        oscillator.start(current_time);
        oscillator.stop(current_time + 0.1);
    }

    return{

        beep_1(){
            generate_beep(600);
        },
        beep_2(){
            generate_beep(500);
        },
        beep_3(){
            generate_beep(400);
        }
    }
}