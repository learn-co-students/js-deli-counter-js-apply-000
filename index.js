      function takeANumber(actualLine, newPerson) {

          actualLine.push(newPerson);
          var lineLength = actualLine.length;
          var welcomePhrase = "Welcome, " + newPerson + ". You are number " + lineLength + " in line.";
          return(welcomePhrase);
            
      }  
      function nowServing(katzDeliLine) { 
          if(katzDeliLine.length>0) {
          var firstInLine = "Currently serving " + katzDeliLine[0] + ".";
          katzDeliLine.shift();
          return firstInLine;
      } else {
          return "There is nobody waiting to be served!"
      }    
      }
      function currentLine(katzDeliLine) {
          var i = 0;
          var lineLength = "The line is currently: ";
          if (katzDeliLine.length>0){  
              
              while(i < katzDeliLine.length){
              lineLength = lineLength + (i+1) + ". " + katzDeliLine[i] +", ";
              i++;
              }
              
            lineLength = lineLength.substr(0,lineLength.length-2);
            return lineLength;
          } else {
          return "The line is currently empty.";
          }
      }