"use strict";

function closure_sound(){
    let volume = 25;
    let duration = 25;
    return {
        produce_sound(frequency,type_of_wave){
            let a = new AudioContext();
            let v=a.createOscillator()
            let u=a.createGain();
            v.connect(u);
            v.frequency.value=frequency;
            v.type=type_of_wave;
            u.connect(a.destination);
            u.gain.value=volume*0.01
            v.start(a.currentTime);
            v.stop(a.currentTime+duration*0.001);
        },
        numeric_key(){
            this.produce_sound(500,"square");
        },
        service_key(){
            this.produce_sound(600,"square");
        },
        operation_key(){
            this.produce_sound(700,"square");
        }
    }
}
