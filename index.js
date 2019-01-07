function takeANumber( katzDeliLine, string ) {

  katzDeliLine.push( string )

  return "Welcome, " + string + ". You are number " + katzDeliLine.length + " in line."

}

function nowServing( katzDeliLine ) {

  var currentPerson
  
  if( katzDeliLine.length === 0 ) {
    return "There is nobody waiting to be served!"
  } else {
    currentPerson = katzDeliLine.shift()
  }

  return "Currently serving " + currentPerson + "."
  
}


function currentLine( katzDeliLine ) {

  var currentLineText = "The line is currently: "
  
  if ( katzDeliLine.length === 0) {
    return "The line is currently empty."
  }else {

    var sentence = ""
    
    for( var i = 0; i < katzDeliLine.length; i++ ){
      sentence = (i+1) + ". " + katzDeliLine[i]
      currentLineText = currentLineText + sentence + ", "
    }

    currentLineText = currentLineText.replace(/,\s*$/, "");
    return currentLineText
  }
}