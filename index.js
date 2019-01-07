let katzDeli = [];

function takeANumber(array,name){
  let line = array;
  line.push(name)
  return "Welcome,"+" "+name+". You are number"+" "+(line.indexOf(name)+1)+" "+"in line.";

}

function nowServing(line){
  if(line.length >= 1){
    let firstPerson = line[0];
    line.shift();
    return "Currently serving"+" "+firstPerson+".";

  }else{
    return "There is nobody waiting to be served!";
  }

}

function currentLine(line){
  let Out_String = "The line is currently:";
  if(line.length === 0){
    return "The line is currently empty.";
  }else{
    for (let i = 0; i < line.length; i++) {
      if(i !== (line.length-1)){
        Out_String += " "+(i+1)+"."+" "+line[i]+",";
      }else{
        Out_String += " "+(i+1)+"."+" "+line[i];
      }
    }
  }
  return Out_String;
}
