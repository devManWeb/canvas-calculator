"use strict";

function closure_canvas(){
	let canvas = document.getElementById("screen_canvas");
	let ctx = canvas.getContext("2d");
	let x_dot_pos = canvas.width/10;
	let y_dot_pos = canvas.height * 0.9;

	return{

		clear_screen(){
			ctx.clearRect(0, 0, 600, 300);
			//screen background
			ctx.fillStyle = "#cbddbe";
			ctx.fillRect(0, 0, canvas.width, canvas.height);
			//draw the dots
			for(var i=0;i<9;i++){
				ctx.fillStyle = "#c4c4c4";
				ctx.fillRect(x_dot_pos + (x_dot_pos * i) - 3,y_dot_pos,5,5);
			}
			//draw part of number
			for(var l=0;l<10;l++){
				ctx.fillStyle = "#c4c4c4";
				//left
				ctx.fillRect(5+(l*x_dot_pos),5,5,40);
				ctx.fillRect(5+(l*x_dot_pos),55,5,40);
				//right
				ctx.fillRect(50+(l*x_dot_pos),5,5,40);
				ctx.fillRect(50+(l*x_dot_pos),55,5,40);
				//orizontal lines
				ctx.fillRect(12+(l*x_dot_pos),5,36,5);
				ctx.fillRect(12+(l*x_dot_pos),48,36,5);
				ctx.fillRect(12+(l*x_dot_pos),90,36,5);
			}
		},

		screen_drawer(desired_symbol,index){
			ctx.fillStyle = "black";
			var pos_x = (9 - index) *x_dot_pos ;
			switch(desired_symbol) {
				case "0":
					//left
					ctx.fillRect(5+pos_x,5,5,40);
					ctx.fillRect(5+pos_x,55,5,40);
					//right
					ctx.fillRect(50+pos_x,5,5,40);
					ctx.fillRect(50+pos_x,55,5,40);
					//orizontal lines
					ctx.fillRect(12+pos_x,5,36,5);
					ctx.fillRect(12+pos_x,90,36,5);
				break;
				case "1":
					ctx.fillRect(50+pos_x,5,5,40);
					ctx.fillRect(50+pos_x,55,5,40);
				break;
				case "2":
					ctx.fillRect(5+pos_x,55,5,40);
					ctx.fillRect(50+pos_x,5,5,40);
					ctx.fillRect(12+pos_x,5,36,5);
					ctx.fillRect(12+pos_x,48,36,5);
					ctx.fillRect(12+pos_x,90,36,5);
				break;
				case "3":
					ctx.fillRect(50+pos_x,5,5,40);
					ctx.fillRect(50+pos_x,55,5,40);
					ctx.fillRect(12+pos_x,5,36,5);
					ctx.fillRect(12+pos_x,48,36,5);
					ctx.fillRect(12+pos_x,90,36,5);
				break;
				case "4":
					ctx.fillRect(5+pos_x,5,5,40);
					ctx.fillRect(50+pos_x,5,5,40);
					ctx.fillRect(50+pos_x,55,5,40);
					ctx.fillRect(12+pos_x,48,36,5);
				break;
				case "5":
					ctx.fillRect(5+pos_x,5,5,40);
					ctx.fillRect(50+pos_x,55,5,40);
					ctx.fillRect(12+pos_x,5,36,5);
					ctx.fillRect(12+pos_x,48,36,5);
					ctx.fillRect(12+pos_x,90,36,5);
				break;
				case "6":
					ctx.fillRect(5+pos_x,5,5,40);
					ctx.fillRect(5+pos_x,55,5,40);
					ctx.fillRect(50+pos_x,55,5,40);
					ctx.fillRect(12+pos_x,5,36,5);
					ctx.fillRect(12+pos_x,48,36,5);
					ctx.fillRect(12+pos_x,90,36,5);
				break;
				case "7":
					ctx.fillRect(50+pos_x,5,5,40);
					ctx.fillRect(50+pos_x,55,5,40);
					ctx.fillRect(12+pos_x,5,36,5);
				break;
				case "8":
					ctx.fillRect(5+pos_x,5,5,40);
					ctx.fillRect(5+pos_x,55,5,40);
					ctx.fillRect(50+pos_x,5,5,40);
					ctx.fillRect(50+pos_x,55,5,40);
					ctx.fillRect(12+pos_x,5,36,5);
					ctx.fillRect(12+pos_x,48,36,5);
					ctx.fillRect(12+pos_x,90,36,5);
				break;
				case "9":
					ctx.fillRect(5+pos_x,5,5,40);
					ctx.fillRect(50+pos_x,5,5,40);
					ctx.fillRect(50+pos_x,55,5,40);
					ctx.fillRect(12+pos_x,5,36,5);
					ctx.fillRect(12+pos_x,48,36,5);
					ctx.fillRect(12+pos_x,90,36,5);
				break;
				case ".":
					ctx.fillRect(pos_x - 3,y_dot_pos,5,5); //here there is another -1 
				break;
				case "-":
					ctx.fillRect(12+pos_x,48,36,5);
				break;
				case "E":
					ctx.fillRect(5+pos_x,5,5,40);
					ctx.fillRect(5+pos_x,55,5,40);
					ctx.fillRect(12+pos_x,5,36,5);
					ctx.fillRect(12+pos_x,48,36,5);
					ctx.fillRect(12+pos_x,90,36,5);
				break;
			}
		}

	}

}
