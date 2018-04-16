//in instance mode we create our whole p5 script as a single function
//the variable 'p' holds all our information, and also lets us access any p5 functions
var sketch = function(p){
    var circleSizeX = 10;
      var circleSizeY = 10;
    var change = 3;
    
    //for any p5 specific functions, we need to put p. instead of just calling them normally
    p.setup = function() { 
      p.createCanvas(p.windowWidth, p.windowHeight);
    } 

    p.draw =  function () {
        p.background("black");
        p.fill("blue");
        p.ellipse(p.windowWidth/2,p.windowHeight/2, circleSizeX,circleSizeY);
        
        circleSizeX += change;
        circleSizeY += change;
  
        if(circleSizeX >= p.windowWidth || circleSizeY >= p.windowHeight){
      change = change *-1
        }  
        if(circleSizeX < 11 || circleSizeY < 11){
        change = change *-1
        }
    
    }
}    
    
//these lines call an 'instance' of p5 using our sketch function, and then (optionally) saves it to a div in our html
var myp5 = new p5(sketch, "one");