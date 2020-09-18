/**
 * This tool stamps or pastes selected/uploaded photo to the canvas
 * Allow user to preview the icon wherever mouse goes
 * When user clicks the image is stamped/pasted on the canvas
 * 
 * There's option to increase/decrease size of the image.
 * 
 * TODO: Has ability to select built-in images/icons/shapes
 * 
 */
function stampTool() {

	this.name = "stampTool";
	this.icon = "assets/stampTool.jpg";

	// this changes in the javascript click handler. So storing it as
	// a variable self now means we can still access it in the handler
	var self = this;

	// where was the mouse on the last time draw was called.
	// set it to -1 to begin with
	var previousMouseX = -1;
	var previousMouseY = -1;

	// Store uploaded stamp image and width/heigh settings for it
	var stampImage = null;
	var imageWidth = 30;
	var imageHeight = 30;

	this.draw = function() {

		// display the last save state of pixels
		updatePixels();

		// do the drawing if the mouse is pressed 
		// And image has been uploaded
 		if ( mousePressedInCanvas() && stampImage !== null ) {
			
			// if the previous values are -1 set them to the current mouse location
			if (previousMouseX == -1) {
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}

			// if there are values in the previous locations
			// draw a line between them and the current positions
			else {

				image(stampImage, mouseX-(imageWidth/2), mouseY-(imageHeight/2), imageWidth, imageHeight);
				previousMouseX = mouseX;
				previousMouseY = mouseY;

			}
		}
		// if the mouse isn't pressed reset the previous values to -1
		else {
			previousMouseX = -1;
			previousMouseY = -1;
		}

		// after the drawing is done save the pixel state. We don't want the
		// line of symmetry to be part of our drawing

		loadPixels();

		// push the drawing state so that we can set the stroke weight and colour
		push();

		// show the selected/uploaded stamp image with cursor
		if( stampImage !== null ){
			image(stampImage, mouseX-(imageWidth/2), mouseY-(imageHeight/2), imageWidth, imageHeight);
		}
		
		// return to the original stroke
		pop();

	};

	
	// when the tool is deselected update the pixels to just show the drawing and
	// hide the line of symmetry. Also clear options
	this.unselectTool = function() {

		updatePixels();

		// clear options
		select(".options").html("");

	};

	// Adds an input field to upload image and a slider to
	// increase/decrease the size of stamp
	this.populateOptions = function() {

		stampFileDiv = createDiv('Upload Image for Stamp: <br />');
		input = createFileInput(function(file){
			if (file.type === 'image') {
				stampImage = loadImage(file.data);
			}
		});
		input.parent(stampFileDiv);
		stampFileDiv.parent('toolsOptions');
		

		stampSizeDiv = createDiv('Size: <br />');
		slider = createSlider(5, 150, 30);
		slider.input(function(){
			imageWidth = this.value();
			imageHeight = this.value();
		});
		slider.parent(stampSizeDiv);
		stampSizeDiv.parent('toolsOptions');



	};

}