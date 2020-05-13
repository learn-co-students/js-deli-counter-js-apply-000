var katzDeliLine = [];

function takeANumber(katzDeliLine , name){
  katzDeliLine.push(name)
  var number = katzDeliLine.length;
      /// var position = number + 1;
      ///^^ when tested gave an array index of 2 for the first person. Just ommited.
  return 'Welcome, ' + name +'. You are number ' + number + ' in line.'; 
}

///Works

function nowServing(katzDeliLine){
  /// array.portotype.shift()
  if(katzDeliLine.length > 0){
    var first = katzDeliLine.shift(); ///removed .slice (dont know why) .shift returned and removed the index
    return "Currently serving " +first+ ".";
  }else{
    return "There is nobody waiting to be served!";
  }
}

///Works

function currentLine(katzDeliLine){
    ///var x = katzDeliLine.toString()
  var final = [];
    ///easier to build the current line as another array rather than a string
  if(katzDeliLine.length > 0){
    for(var i =0;i<katzDeliLine.length;i++){
      final.push(i+1 + ". " +katzDeliLine[i])
    }
    return "The line is currently: " +final.join(", ");
      ///thought about a do while loop but dont think the logic works. 
  }else{
    return "The line is currently empty."
  }
}