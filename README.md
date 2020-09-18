# Drawing Application
This is my school project for University of London.

## Tools Extensions
### 1. NEW: Stamp Tool
This tool lets to paste/stamp any image on the canvas. When you select this tool you get 2 options populated on bottom part:
 - An option to upload image
 - A slider to chose size of the image
 - TODO: Option to select built-in images

You can see the image live wherever your cursor goes and when you click the image is placed on canvas and you still have the live preview image following where the mouse goes.

### 2. NEW: Eraser Tool
This tool erases anything from the canvas (in basic terms, it only paints white on the canvas). Has the option to:
 - Select shape of eraser (boxed, round or triangle)
 - Increase/Decrease the size of eraser with a slider


### 3. NEW: Cut Tool
This tool let's user cut any part of the canvas. I plan to introduce circular, freehand and point-by-point cutting like in Adobe Photoshop but currently it only supports rectangular cutting.

## Added Features
 - Option to name the saved file when clicking "Save image"

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

### Coding/Reference Help
 - After searching, this article confirmed that `createImg()` function puts the `<img>` tag in DOM: https://github.com/processing/p5.js/issues/3854#issuecomment-507859431
 - Another google search found this reply (after trying `loadImage()` I was able to save image to variable instead of putting it in DOM): https://github.com/processing/p5.js/issues/2658#issuecomment-459817063