<img width="150px" src="https://www.nscc.ca/img/aboutnscc/visual-identity-guidelines/artwork/nscc-jpeg.jpg" >

# PROG 2700 - Tech Check 4 

**Value:** 7.5% of overall course mark  

## DOM and SASS

NOTE: You do not have to complete the requirements in the order that they're presented. Choose any order that you wish.

### REQUIREMENT 1 - SLIDER
You are required to hook up the provided slider on the HTML page so that when the slider is moved left or right, the `GRAVITY`
value in the application changes accordingly. You will know that the slider is working
as the particle fountain will start to behave accordingly. Refer to the docs at 
[https://www.w3schools.com/howto/howto_js_rangeslider.asp](https://www.w3schools.com/howto/howto_js_rangeslider.asp) for more information.

### REQUIREMENT 2 - DISPLAY PERCENTAGE
Display the slider value as a percentage value on the page in the provided percentage
**SPAN** tag. For example, when the slider is all the way to the left the display should
show 0%. When the slider is all the way to the right, the display should show 100%. Refer to the docs at 
[https://www.w3schools.com/howto/howto_js_rangeslider.asp](https://www.w3schools.com/howto/howto_js_rangeslider.asp) for more information.

### REQUIREMENT 3 - SASS COLOR VARIABLES
Create a SASS partial file called _colors.scss. In it you will define variables for the
currently defined colors in main.scss. You will then import the SASS partial into 
main.scss and replace the existing colors with the newly defined variables.

### REQUIREMENT 4 - CREATE A MIXIN
Create a mixin which will contain the four common elements found between the **.slider::after** 
and **.slider::-moz-range-thumb** CSS selectors. The mixin should output these four values. (width, height, background, and cursor).
The mixin should also define four parameters that will allow the four values to be set when
calling the mixin. Replace the common elements with a call to your new mixin.

### Submission Instructions

Once your program is complete, or if you run out of in-class time to complete the Tech Check, commit and push your code to GitHub with the commit message "End of Class"

If you complete the Tech Check outside of class time, commit and push your subsequent code additions and changes with a message or "Ready for Marking"

### Marking Scheme
Final Grade | Requirement
:---: | ---
|**10/10** | Tech check is correct (passes all tests) and is completed within the allotted in-class time.
|**8/10** | Tech check is correct (passes all tests) and is completed within a 12-hour grace period beginning immediately following the end of in-class time.
|**6/10** | Tech check is correct (passes all tests) and is completed and submitted after the 12-hour grace period has elapsed.
|**0/10** | Tech check is not submitted or not all requirements are met.
