function takeANumber(katzDeli,name){
    katzDeli.push(name);
     return "Welcome, "+ `${name}` +"."+" You are number " + katzDeli.length + " in line.";}

function takeANumber(otherDeli,name){
    otherDeli.push(name);
     return "Welcome, "+ `${name}` +"."+" You are number " + otherDeli.length + " in line.";}
     
 function nowServing(line){
    if (line.length === 0){
  return "There is nobody waiting to be served!";
  }
  else{ customer = [line][0].shift();
  return "Currently serving " + `${customer}` + ".";
  }
  
}
const deliLine = ["Steven", "Blake", "Avi"];
function nowServing(deliLine){
    if (deliLine.length === 0){
  return "There is nobody waiting to be served!";
  }
  else{
  return "Currently serving " + [deliLine][0].shift() + ".";
  }
  
}

var joined_list = [];
function currentLine(line){
     if (line.length === 0){
        return "The line is currently empty.";
        }
    else {
        for (let i = 0; i<line.length;i++){
           joined_list.push(" "+ (i+1) + ". " +line[i]);
              }
        return ("The line is currently:"+ joined_list);
          }
  }
    