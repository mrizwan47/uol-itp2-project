# Drawing Application
This is my school project for University of London.

## Tools Extensions

### 1. ADDED: Stamp Tool
This tool lets the user paste/stamp 11 built-in images (selectable) on the canvas. When you select this tool you get 3 options populated on the bottom part:
 - An option to select from 11 built-in images
 - OR upload any image from your computer
 - A slider to choose the size of the image

You can see the live preview of the image wherever your cursor goes and when you click on canvas, the image is placed on canvas and you still have the live preview image following the pointer.

**Under the Hood**
 - Live Preview: Draw function checks if the `stampImage` is not `null` it will save the current canvas state and then draw the `stampImage` centered to the mouse position and then pop that saved state back.
 - Pasting image: In draw function, the app checks if `stampImage` is not `null` and mouse if pressed inside canvas. If that condition is met, it'll simply use `image()` function of p5js to place image centered on the mouse position.

### 2. ADDED: Eraser Tool
This tool erases anything from the canvas. Has the option to:
 - Select shape of eraser (boxed, round or triangle)
 - Increase/Decrease the size of eraser with a slider

**Under the Hood**
 - Eraser Preview: uses the same technique like Stamp Tool's preview.
 - For actual erasing part, it simply draws `rect`, `ellipse` or `triangle` on the canvas


### 3. ADDED: Cut Tool
This tool let's user cut any part of the canvas. I plan to introduce circular, freehand and point-by-point cutting like in Adobe Photoshop but currently it only supports rectangular cutting. You simply press mouse button and hold it while draging on the canvas. You see preview of area that will be cut. Once you've selected you have the option to either **discard** the selection or **cut** the selected area. Once cut, the cutted layer will hover wherever your mouse goes. When you click anywhere on canvas the image will be placed there and you can redo the whole process.

**Under the Hood**
_Everything in this tool is covered by video lectures and the tools above, so to stay in words limit:_
 - Depending on the cut direction, I had to modify the parameters of `get()` method.

## Added Features
 - Save image: Option to rename the file
 - Pencil Tool: Option to increase/decrease thickness
 - LineTool: Option to increase/decrease line width
 - Mirror Tool: Option to increase/decrease thickness of line
 - Spray Tool: Droplets Thickness + Spray Size + Density options


## Ideas
 - Option to set width/heigh of the canvas
 - Use HTML5 Color Picker for `colorP`



## ~~Weekly~~ Daily Logs

### 16 September, 2020
 - Downloaded template project.
 - Started making StampTool
 - The icons weren't to my liking, so changed them from iconfinder.com
 - Added option to rename file when saving image and styled the buttons
 - Finished stamp tool, it has ability for user to upload any image and increase/decrease it's size.
 - Made a private github repo and added readme.md to keep track of features, extensions, logs and resources list.
 - ~~**Known issue 1.1:** When clicking outside the canvas, the stamp tool still draws the image.~~

### 17 September, 2020
 - Added Eraser tool with option to select shape (round, boxed or triangle) and increase/decrease size of it.
 - Fixed a bug in Stamp tool: Once stamp tool was selected and you select any other tool you won't be able to draw anything on canvas.
 - Decided to make cut tool for my 3rd extension.
 - Created `resetColors()` method in `ColourPalette` class
 - Fixed known issue 1.1 from yesterday.
 - Pushed Cut Tool to the repo
 - ~~**Known issue 1.2:** When using cuttin tool if we drag from top-left to bottom-right it works fine, otherwise the dimensions for `get` are reversed and we don't get the image.~~


### 18 September, 2020
 - Fixed known issue 1.2 in Cutting Tool
 - Found Bug in Stamp Tool: When I upload any image, it's placed on bottom of the page as well.
 - Fixed Stamp Tool
 - Added 11 built-in stamps in Stamp Tool
 - Pencil Tool: Added option to increase/decrease thickness
 - LineTool: Added option to increase/decrease line width
 - Mirror Tool: Added option to increase/decrease thickness of line
 - Spray Tool: Added Droplets Thickness + Spray Size + Density options
 - Some minor UX fixes and cleaning code
 


_Disclaimer: Due to covid and some personal reasons I wasn't able to keep up with studies and this all project was done under 1 week. That's why no weekly logs, only daily. I've been coding professionally for 8 years, so 1 week is no big deal._

## Acknowledgement

### Resources Used
 - Pencil Icon: https://www.iconfinder.com/icons/2931178/change_creative_design_draw_edit_pen_pencil_icon
 - Spray Icon: https://www.iconfinder.com/icons/6140916/color_design_graphic_paint_spray_icon
 - Line Icon: https://www.iconfinder.com/icons/2931142/line_minimize_minus_remove_icon
 - mirror Icon: https://www.iconfinder.com/icons/6602480/design_graphic_mirror_reflect_symmetry_tool_icon
 - Stamp Icon: https://www.iconfinder.com/icons/2784251/business_finance_money_print_stamp_icon
 - Eraser Icon: https://www.iconfinder.com/icons/6602600/design_eraser_graphic_icon
 - Cut Tool: https://www.iconfinder.com/icons/3605337/cut_cutter_knife_razor_sharp_stationery_tool_icon
 - Stamp icons:
	1. Home: https://www.iconfinder.com/icons/2222742/building_front_home_house_view_icon
	2. Dog: https://www.iconfinder.com/icons/3316536/animal_cachorro_dog_dogs_icon
	3. Cat: https://www.iconfinder.com/icons/3316542/animal_cat_cats_gato_icon
	4. Panda: https://www.iconfinder.com/icons/4591884/animal_bear_cartoon_fauna_herbivore_panda_zoo_icon
	5. Linkedin: https://www.iconfinder.com/icons/1542393/linkedin_media_social_icon
	6. Facebook: https://www.iconfinder.com/icons/1542396/facebook_media_social_icon
	7. Twitter: https://www.iconfinder.com/icons/1542408/media_social_twitter_icon
	8. Snapchat: https://www.iconfinder.com/icons/1542383/media_snapchat_social_icon
	9. Star: https://www.iconfinder.com/icons/2792946/christmas_star_xmas_icon
	10. Heart: https://www.iconfinder.com/icons/2530804/general_heart_heart_beat_heart_disease_heart_rate_heart_shape_office_icon
	11. Be Mine: https://www.iconfinder.com/icons/2903221/be_mine_stamp_icon

### Coding/Reference Help
 - After searching, this article confirmed that `createImg()` function puts the `<img>` tag in DOM: https://github.com/processing/p5.js/issues/3854#issuecomment-507859431
 - Another google search found this reply (after trying `loadImage()` I was able to save image to variable instead of putting it in DOM): https://github.com/processing/p5.js/issues/2658#issuecomment-459817063

Apart from these 2, I only read https://p5js.org/reference/

_Disclaimer: I've been coding professionally for 8 years, so there was rarely anything I couldn't find on p5 docs._






# Answers I submitted with project:


## List the modifications and extension that you have made to the template file (400 words).


## Describe how effective your plan was in completing your project (250 words). 
I wasn't able to keep up with lectures since the beginning of this module. Partially because of COVID and also because of some personal reasons. So, in other words: I had no plan. In fact, I wasn't able to submit midterms report either. In my defense, the midterm deadline for Web Development was extended and I thought the deadline is extended for this module too. 

Anyways, back to my schedule. I started going through lecture videos ~2 weeks before the Final Project deadline. Spent a little more than 1 week on video lectures and reading material. After that, on 16 September, I downloaded the template project and started working on the project. I'm a seasoned programmer with more than 8 years of experience working in javascript, so there was still a lot of time for me to finish the project before the deadline. I finished the project on 18 September.

The most challenging thing I found overall, not specifically to the project, was the 'time management'. If I had been taking regular lectures I wouldn't have to rush myself into finishing the project in a few days. Another thing I found challenging was cutting canvas image in any shape. I planned on adding 'circular', 'free-hand', and 'point to point' layer cutting modes in "Cut Tool". But `get()` function of p5 allowed me to only cut it in a rectangular shape. I searched p5 docs and googled but couldn't find a solution. So, had to drop those features.


## Evaluate the process of completing the project and how effective the final product is. (250 words)
Although the project was completed in a rush but the code structure and integrity is fine. I should have started the project at least 2 weeks before the deadline. That way I wouldn't have exhausted myself to submit the project. After every new feature or bug removed, I'd test the whole application. I would test all the tools using random options to check if anything is breaking. Apart from my own testing, I asked my colleagues (I'm CTO at a software house) to test them on my computer. Some errors found and later fixed. There were 3 testers and all of them really loved the app. They said it reminded them of Microsoft Paint from our childhood, that's why I titled the HTML file "Paint 1985". I really wish I also had time to implement unit testing and make it an npm module.