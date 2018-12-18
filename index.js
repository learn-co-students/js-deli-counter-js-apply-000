var katzDeliLine = ["Ada", "Grace", "Bob", "Dana" , "Ben"];
var linelength = katzDeliLine.length;
		
for (var i = 0;  i < linelength; i++) {
	var k = i + 1
	var output = "Welcome, " + katzDeliLine[i] + ". You are number " + k + " in line."

	console.log(output);
};

//Now Serving Line
function nowServing() {
  			if (linelength === 0) {
    			
    			console.log("There is no one left to be served!")

  			} else (linelength != 0) 

  			{
  				for (i = 0; i < linelength; i++) {
  					katzDeliLine.shift()
  					console.log("Currently serving " + katzDeliLine[i] +".")
  				}
  				

  			};

    
  		};
		
	nowServing();
	
//current line function
function currentLine(x) {
    var line = []
    if (x.length === 0) {
      return "The line is currently empty."
    } else {
      for(var i = 0; i < x.length; i++) {
        line += (i + 1) + ". " + x[i] + ", "
      }
      line = line.slice(0, line.length-2)
      return "The line is currently: " + line
    }
}



