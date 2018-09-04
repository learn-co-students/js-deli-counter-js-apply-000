//Question 1

var katzDeliLine = [];

function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  return 'Welcome, '+ name +'.' + ' You are number '+ katzDeliLine.length + ' in line.';
}
//Question 2
function nowServing(katzDeliLine){
  if(katzDeliLine.length===0){
    return 'There is nobody waiting to be served!';
  }
  else{
    return 'Currently serving '+ katzDeliLine.shift()+'.';
    }
}


//Question 3

function currentLine(katzDeliLine){
   var queue=[];
  for(let i=0; i<katzDeliLine.length; i+=1){
    queue.push(' '+[i+1]+'. '+katzDeliLine[i]);
  }
  if(katzDeliLine.length<1){
    return "The line is currently empty.";
  }else
  return ('The line is currently:'+ [queue]);
}


