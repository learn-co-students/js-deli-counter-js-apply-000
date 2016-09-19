 // Add elements to an array
 // return items from an array
 // iterate through an array
 //Pass an array as a function parameter
 //Michael Muller (expediency@live.com)

var katzDeli = [] // As requested, however this array is not used.

//This function adds a person's name to KatzDeliLine and returns the person's
// place in a line
function takeANumber(katzDeliLine,newPersonName){
  katzDeliLine.push(newPersonName)
  var mockPerson = "Welcome, " +
                    katzDeliLine[katzDeliLine.length-1] +
                    ". You are number " +
                    (katzDeliLine.length).toString() +
                    " in line."
  return mockPerson

}

//This function turns our collection into a queue, removing the first element
// and returns the element as a concatenated string, if there are elements of course.
function nowServing(katzDeliLine){
  if(katzDeliLine.length != 0){
    var mockServing = "Currently serving " + katzDeliLine.shift() + "."
    return mockServing
  }
  else{
    return "There is nobody waiting to be served!"
  }
}
//basic function, iterates through an array for its length with indifference to index
// Final product slices off unneeded characters
function currentLine(katzDeliLine){
  var theLine= "The line is currently: "
  if(katzDeliLine.length != 0){
  for(var i = 0; i<katzDeliLine.length;i++){
    theLine += (i+1).toString()+
                ". " +
                katzDeliLine[i] +
                ", "
  }}
  else{
    return "The line is currently empty."
  }
  return theLine.slice(0,-2)
}
