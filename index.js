var katzDeliLine = [];

function takeANumber(line, customer) {
    line.push(customer);
    
    console.log("Welcome, " + customer + ". You are number " + line.length + " in line.");
    
    // return "Welcome, " + name + ". You are number " + line.length + " in line.";
  }

  function currentLine(line) {
    var currentlyInLine = [];
    line.forEach(customer => {
        currentlyInLine.push(line.indexOf(customer) + 1 + ". " + customer); 
    });
    
    if(line.length > 0) {
      currentlyInLine.toString();
      console.log("The line is currently: " + currentlyInLine.join(', '));
    } else {
      console.log("The line is empty!!!");
    }
    
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
  currentLine(katzDeliLine);
  
 

  

  
  
  

  