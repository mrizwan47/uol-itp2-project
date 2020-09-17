/**
 * Cut Tool
 * 
 * Enables user to cut and paste part of canvas
 * 
 * Ability to select cutting modes:
 *  - boxed: Rectangular cutting
 *  - round: Circular Cutting
 *  - TODO: Freehand Cutting
 *  - TODO: Point-by-Point cutting
 * 
 */
function CutTool(){
	
	this.icon = "assets/cutTool.jpg";
	this.name = "CutTool";

	var cuttingMode = 'boxed';

	var startMouseX = -1;
	var startMouseY = -1;

	var cutting = false;
	var cuttingCoords;


	this.draw = function(){

		// only erase when mouse is clicked
		if( mousePressedInCanvas() ){

			if( ! cutting ){
				console.log('Started Cutting');
				startMouseX = mouseX;
				startMouseY = mouseY;
				cutting = true;
			}

		}else if( cutting ){

			console.log('Released');
			cutting = false;
			startMouseX = -1;
			startMouseY = -1;

		}

		if( cutting ){

			updatePixels();
			loadPixels();

			push();
			noFill();
			stroke(0);
			rect(startMouseX, startMouseY, mouseX-startMouseX, mouseY-startMouseY);
			colourP.resetColors();
			pop();		

		}

	};


	// when the tool is deselected clear options
	this.unselectTool = function() {
		
		updatePixels();
		
		// clear options
		select(".options").html("");

	};

	// Adds a dropdown to select cutting mode and buttons to discard/cut etc
	this.populateOptions = function() {

		// Select input to select cutting mode
		shapeDiv = createDiv('Cutting Mode: <br />');
		sel = createSelect();
		sel.option('boxed');
		sel.option('round');
		sel.option('freehand (coming soon)');
		sel.option('point to point (coming soon)');
		sel.selected('boxed');
		sel.changed(function(v){
			cuttingMode = this.value();
		});
		sel.parent(shapeDiv);
		shapeDiv.parent('toolsOptions');


	};


	/**
	 * Draws Eraser
	 * 
	 * This function draws eraser either for preview of the actual erasing part
	 * 
	 * @uses eraserShape
	 * 
	 */
	this.eraserDraw = function(){

		fill(255);
		switch (eraserShape) {
			
			// Box Shaped Eraser
			case 'boxed':
				rect(mouseX-(eraserSize/2), mouseY-(eraserSize/2), eraserSize, eraserSize);
			break;

			// Round Shaped Eraser
			case 'round':
				ellipse(mouseX, mouseY, eraserSize);
			break;

			case 'triangle':
				triangle(
					mouseX, mouseY-(eraserSize/2),
					mouseX-(eraserSize/2), mouseY+(eraserSize/3),
					mouseX+(eraserSize/2), mouseY+(eraserSize/3)
				);
			break;

			
			default:
				rect(mouseX-(eraserSize/2), mouseY-(eraserSize/2), eraserSize, eraserSize);
			break;

		}

		fill(colourP.selectedColour);
		stroke(colourP.selectedColour);
		strokeWeight(1)

	};


}
