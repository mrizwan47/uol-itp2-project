/**
 * Cut Tool
 * 
 * Enables user to cut and paste part of canvas
 * 
 * Ability to select cutting modes:
 *  - boxed: Rectangular cutting
 *  - TODO: round: Circular Cutting
 *  - TODO: Freehand Cutting
 *  - TODO: Point-by-Point cutting
 * 
 * TODO: Ability to scale cutted/copied image
 * 
 */
function CutTool(){
	
	this.icon = "assets/cutTool.jpg";
	this.name = "CutTool";

	var cuttingMode = 'boxed';

	var startMouseX = -1;
	var startMouseY = -1;
	var endMouseX = -1;
	var endMouseY = -1;

	/**
	 * Cutting Phase
	 * 
	 * 0: Haven't started cutting/selecting/slicing
	 * 1: Started cutting/selecting/slicing
	 * 2: Finished cutting/selecting/slicing
	 * 3: Cutted/Copied, waiting to paste
	 * 4: Pasted. Now when mouse is released, reset cuttingPhase
	 * 
	 */
	var cuttingPhase = 0;


	var toBePastedImage;

	/**
	 * Fix for a bug of mouseIsPressed
	 * more info: https://github.com/processing/p5.js/issues/2113
	 */
	var fixUnresponsiveMousePress = false;


	this.draw = function(){

		console.log(cuttingPhase);

		// only erase when mouse is clicked
		if( mousePressedInCanvas() && !fixUnresponsiveMousePress ){

			if( cuttingPhase == 0 ){
				console.log('Started Cutting');
				startMouseX = mouseX;
				startMouseY = mouseY;
				cuttingPhase = 1;
			}

			if( cuttingPhase == 3 ){
				updatePixels();
				image(toBePastedImage, mouseX-(toBePastedImage.width/2), mouseY-(toBePastedImage.height/2));
				loadPixels();
				console.log('Pasted the image.');
				cuttingPhase = 4;
				startMouseX = -1;
				startMouseY = -1;
				endMouseX = -1;
				endMouseY = -1;

			}

		}else if( cuttingPhase == 1 ){

			console.log('Released');
			cuttingPhase = 2;
			endMouseX = mouseX;
			endMouseY = mouseY;

		}else if( cuttingPhase == 4 ){
			cuttingPhase = 0;
		}

		switch( cuttingPhase ){

			case 1:
				updatePixels();
				loadPixels();
	
				push();
				noFill();
				stroke(0);
				rect(startMouseX, startMouseY, mouseX-startMouseX, mouseY-startMouseY);
				colourP.resetColors();
				pop();
			break;

			case 3:
				updatePixels();
				loadPixels();
	
				push();
				noFill();
				stroke(0);
				image(toBePastedImage, mouseX-(toBePastedImage.width/2), mouseY-(toBePastedImage.height/2));
				colourP.resetColors();
				pop();	
			break;
		
		}


	};


	// when the tool is deselected clear options
	this.unselectTool = function() {
		
		updatePixels();

		// Reset Cutting phase
		cuttingPhase = 0;
		
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

		// Actions buttons
		actionDiv = createDiv('Actions: <br />');
		
		// Discard Button
		discard = createButton('Discard');
		discard.mousePressed(function(){
	
			if( cuttingPhase == 2 ){
				updatePixels();

				// Reset Cutting phase
				cuttingPhase = 0;

				console.log('Discarding current cut');

			}

		});

		cut = createButton('Cut');
		cut.mousePressed(function(){
	
			if( cuttingPhase == 2 ){
				updatePixels();

				// Set Cutting phase
				cuttingPhase = 3;

				toBePastedImage = get(startMouseX, startMouseY, endMouseX-startMouseX, endMouseY-startMouseY);
				
				console.log(toBePastedImage);
				
				// Fill empty with white
				fill(255);
				noStroke();
				rect(startMouseX, startMouseY, endMouseX-startMouseX, endMouseY-startMouseY);

				// Reset colors back to what user selected
				colourP.resetColors();
				loadPixels();

				

				// TODO:
				console.log('Cutted that out!');

			}

		});

		cut.parent(actionDiv);
		discard.parent(actionDiv);

		actionDiv.parent('toolsOptions');


	};


}
