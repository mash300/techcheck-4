// PROG 2700 - CLIENT SIDE PROGRAMMING
// TECH CHECK #4 - DOM and SASS

// NOTE: You do not have to complete the requirements in the order that they're presented. 
// Choose the order that you wish.

// REQUIREMENT 1 - SLIDER
// You are required to hook up the provided slider on the HTML page so that when the slider 
// is moved left or right, the GRAVITY value in the application changes accordingly. You will 
// know that the slider is working as the particle fountain will start to behave accordingly.  
// Refer to the docs at https://www.w3schools.com/howto/howto_js_rangeslider.asp for more information.

// REQUIREMENT 2 - DISPLAY PERCENTAGE
// Display the slider value as a percentage value on the page in the provided percentage
// SPAN tag. For example, when the slider is all the way to the left the display should 
// show '0%'. When the slider is all the way to the right, the display should show '100%'.  
// Refer to the docs at https://www.w3schools.com/howto/howto_js_rangeslider.asp for more information.

// REQUIREMENT 3 - SASS COLOR VARIABLES
// Create a SASS partial file called '_colors.scss'. In it you will define variables for the
// currently defined colors in main.scss. You will then import the SASS partial into 
// main.scss and replace the existing colors with the newly defined variables.

// REQUIREMENT 4 - CREATE A MIXIN
// Create a mixin which will contain the four common elements found between the '.slider::after' 
// and '.slider::-moz-range-thumb' CSS selectors. The mixin should output these four values. (width, height, background, and cursor).
// The mixin should also define four parameters that will allow the four values to be set when
// calling the mixin. Replace the common elements with a call to your new mixin.

// MARKING
// 10/10 - Tech check is correct (passes all tests) and is completed within the allotted in-class time.
//  8/10 - Tech check is correct (passes all tests) and is completed within a 12-hour grace period beginning immediately following the end of in-class time.
//  6/10 - Tech check is correct (passes all tests) and is completed and submitted after the 12-hour grace period has elapsed.
//  0/10 - Tech check is not submitted or not all requirements are met.

// DO NOT MODIFY ANY OF THE EXISTING CODE BELOW
// V         V           V           V        V

(function(){
  const DAMPING = 0.999999;
  const NUMBER_OF_DROPS = 5000;
  let GRAVITY = 0.5;
  
  function Particle(x, y, color) {
    this.x = this.oldX = x;
    this.y = this.oldY = y;
    this.color = color;
  }
  Particle.prototype.integrate = function() {
    const velocity = this.getVelocity();
    this.oldX = this.x;
    this.oldY = this.y;
    this.x += velocity.x * DAMPING;
    this.y += velocity.y * DAMPING;
  };
  Particle.prototype.getVelocity = function() {
    return {
      x: this.x - this.oldX,
      y: this.y - this.oldY
    };
  };
  Particle.prototype.move = function(x, y) {
    this.x += x;
    this.y += y;
  };
  Particle.prototype.bounce = function() {
    if (this.y > height) {
      const velocity = this.getVelocity();
      this.oldY = height;
      this.y = this.oldY - velocity.y * 0.3;
    }
  };
  Particle.prototype.draw = function() {
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(this.oldX, this.oldY);
    ctx.lineTo(this.x, this.y);
    ctx.stroke();
  };
  const display = document.getElementById('display');
  const ctx = display.getContext('2d');
  const drops = [];
  const width = display.width = window.innerWidth;
  const height = display.height = window.innerHeight-200;
  ctx.globalCompositeOperation = 'overlay';
  requestAnimationFrame(frame);
  
  function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
  }
  
  function frame() {
    requestAnimationFrame(frame);
    ctx.clearRect(0, 0, width, height);
    for (let j = 0; j < 5; j++) {
      if (drops.length < NUMBER_OF_DROPS) {
        const drop = new Particle(width * 0.5, height, getRandomColor());
        drop.move(Math.random() * 4 - 2, Math.random() * -2 - 15);
        drops.push(drop);
      }
    }
    for (let i = 0; i < drops.length; i++) {
      drops[i].move(0, GRAVITY);
      drops[i].integrate();
      drops[i].bounce();
      drops[i].draw();
    }
  }

  // ^      ^       ^        ^        ^         ^
  // |      |       |        |        |         |
  // DO NOT MODIFY ANY OF THE EXISTING CODE ABOVE
  
  // PLACE YOUR CODE BELOW THIS LINE TO ADD THE REQUIRED FUNCTIONALITY
    // // Defined variables
    let slider = document.getElementById("gravity_slider");
    let output = document.getElementById("percent_display");
    
    //Adding functionality to the association
    slider.oninput = function() {
    GRAVITY = parseFloat(this.value);
    output.innerHTML = GRAVITY;
    }




    // // // Defined variables
    // let slider = document.getElementById("gravity_slider");
    // let output = document.getElementById("percent_display");
    

    // //Adding functionality to the association
    // slider.oninput = function() {
    // output.innerHTML = this.value;
    
    // }

    // // Defined variables
    // let slider = document.getElementById("gravity_slider");
    // let output = document.getElementById("percent_display");
    
    // //Adding functionality to the association
    // slider.oninput = function() {
    // output.innerHTML = this.value;
    
    // }

    
 
})()
