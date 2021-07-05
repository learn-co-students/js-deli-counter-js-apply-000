
//Question 1

function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  return 'Welcome, '+ name +'.' + ' You are number '+ katzDeliLine.length + ' in line.';
}


//Question 2

function nowServing(katzDeliLine){
  if(katzDeliLine.length<1){
    return 'There is nobody waiting to be served!';
  }
  else{
    return 'Currently serving '+ katzDeliLine.shift()+'.';
    }
}

/*
//Question 3 
//(3 VARIATIONS)

//Variation1.(9 lines of code) 

function currentLine(katzDeliLine){
  var curLine=[];
  for(let i=0;i<katzDeliLine.length;i+=1){
    curLine.push(' '+(i+1)+'. '+ katzDeliLine[i]);
  }
  if(katzDeliLine.length<1){
    return'The line is currently empty.';
  }else
  return 'The line is currently:'+ curLine;
}
*/
 
//Variation 2.(9 lines of code)
//Same as variation1 but used .join method to list array
//Slightly more complicated than variation1 but the best in my opinion.

function currentLine(katzDeliLine){
  var curLine=[];
  for(var i=0;i<katzDeliLine.length;i+=1){
    curLine.push(i+1+'. '+katzDeliLine[i]);
  }
  if(katzDeliLine.length<1){
    return 'The line is currently empty.';
  }else
  return 'The line is currently: '+curLine.join(', ');
}


/*
//Variation3.(11 lines of code)
//Used a while loop instead of a for loop with .join method.

function currentLine(katzDeliLine){
  var curLine=[];
  var counter=0;
  while(counter<katzDeliLine.length){
    curLine.push(counter+1+'. '+katzDeliLine[counter]);
    counter+=1;
  }
  if(katzDeliLine.length<1){
    return 'The line is currently empty.';
  }else
  return 'The line is currently: '+curLine.join(', ');
}

I tried to teach myself forEach loop but couldn't get it to work. Think that would be most efficient I just don't understand the syntax. 


*/