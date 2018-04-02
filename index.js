var katzDeliLine=[];
function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  var line_position=katzDeliLine.length;
  return (`Welcome, ${name}. You are number ${line_position} in line.`);
}
function nowServing(katzDeliLine){
  if (katzDeliLine.length===0){
    return ("There is nobody waiting to be served!")
  }else{
  var first_person=katzDeliLine.shift();
  return (`Currently serving ${first_person}.`);
  }
}
function currentLine(katzDeliLine){
  var line_length=katzDeliLine.length;
  if (line_length===0){
    return("The line is currently empty.");
  }else{
    var new_katzDeliLine="";
    for (var i=1;i<line_length;i++){
      new_katzDeliLine+=(`${i}. ${katzDeliLine[i-1]}, `);
    }
    new_katzDeliLine=new_katzDeliLine+(`${line_length}. ${katzDeliLine[i-1]}`);
    return (`The line is currently: ${new_katzDeliLine}`);
  }
}