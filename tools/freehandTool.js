function FreehandTool(){

	// set an icon and a name for the object
	this.icon = "assets/pencilTool.jpg";
	this.name = "freehand";

	// to smoothly draw we'll draw a line from the previous mouse location
	// to the current mouse location. The following values store
	// the locations from the last frame. They are -1 to start with because
	// we haven't started drawing yet.
	var previousMouseX = -1;
	var previousMouseY = -1;

	var lineWidth = 1;

	this.draw = function(){

		// if the mouse is pressed
		if( mousePressedInCanvas() ){
			
			// check if they previousX and Y are -1. set them to the current
			// mouse X and Y if they are.
			if (previousMouseX == -1){
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}

			// if we already have values for previousX and Y we can draw a line from 
			// there to the current mouse location
			else{
				strokeWeight(lineWidth);
				line(previousMouseX, previousMouseY, mouseX, mouseY);
				colourP.resetColors();
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}

		}

		// if the user has released the mouse we want to set the previousMouse values 
		// back to -1.
		// try and comment out these lines and see what happens!
		else{
			previousMouseX = -1;
			previousMouseY = -1;
		}

	};

	// when the tool is deselected clear options
	this.unselectTool = function() {

		// updatePixels();

		// clear options
		select(".options").html("");

	};

	// Adds a slider to increase/decrease the thickness of pencil
	this.populateOptions = function() {

		// Slider to increase/decrease size of stamp
		pencilThicknessDiv = createDiv('Pencil Thickness: <br />');
		slider = createSlider(1, 20, 1);
		slider.input(function(){
			lineWidth = this.value();
		});
		slider.parent(pencilThicknessDiv);
		pencilThicknessDiv.parent('toolsOptions');


	};

}