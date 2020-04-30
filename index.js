function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var i ;
  var number = "" ;
  for ( i = 0; i <= katzDeliLine.length; i++ ) {
    if (katzDeliLine[i] === name) {
      number+=(i + 1) ;
    return "Welcome, " + name + ". You are number " + number + " in line." ; } }
  return katzDeliLine ;
}  

function nowServing(katzDeliLine) {
  var first = "" ;
  first += katzDeliLine[0] ;
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!" }
  else {
    katzDeliLine.splice(0,1) ;
    return "Currently serving " + first + "." }
  return katzDeliLine ;
}

function currentLine(katzDeliLine) { 
  if (katzDeliLine.length === 0) {
    return "The line is currently empty." }
  var str = "The line is currently: " ; 
  var i ;
  for ( i = 0; i <= katzDeliLine.length - 1; i++ ) {
    if ( i === katzDeliLine.length - 1 ) {
      str += i+1 + ". " + katzDeliLine[i] }
    else {
      str += i+1 + ". " + katzDeliLine[i] + ", " } }
  return str ;
}