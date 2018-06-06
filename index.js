var katzDeliLine = [];

function takeANumber(line, name){
    line.push(name);
    
    console.log("Welcome, " + name + ". You are number " + line.length + " in line.");
    
    // return "Welcome, " + name + ". You are number " + line.length + " in line.";
  }

  function currentLine(line) {
    var currentlyInLine = [];
    line.forEach(element => {
        currentlyInLine.push(line.indexOf(element) + 1 + ". " + element); 
    });
    
    currentlyInLine.toString();
    console.log("The line is currently: " + currentlyInLine.join(', ') );
  }

  function nowServing() {
    //Serving next customer in line and remove that customer from the line.
      if(katzDeliLine.length > 0) { 
        console.log("Currently serving " + katzDeliLine[0]);
        return katzDeliLine.splice(0,1);
      } else {
          console.log("There is nobody waiting to be served");
      }
  }
  
  

  takeANumber(katzDeliLine, "Ada");
  takeANumber(katzDeliLine, "Scott");
  takeANumber(katzDeliLine, "James");
  takeANumber(katzDeliLine, "Don");
  takeANumber(katzDeliLine, "Jack");
  takeANumber(katzDeliLine, "Tiffany");

  currentLine(katzDeliLine);

  nowServing();
  currentLine(katzDeliLine);
  nowServing();
  nowServing();
  currentLine(katzDeliLine);
  nowServing();
  nowServing();
  nowServing();
  nowServing();
  
 

  

  
  
  

  