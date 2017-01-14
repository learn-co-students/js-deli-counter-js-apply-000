var katzDeliLine = [];
var newname;

function takeANumber(katzDeliLine, newname) {
//input: array of units + new person name
//output: adds a person to katzDeliLine and returns a pleasant update

  katzDeliLine.push(newname)

  var latest = katzDeliLine.indexOf(newname)+1
  return "Welcome, " + newname + ". You are number " + latest + " in line."

}

function nowServing(katzDeliLine) {
//input: array of units in line
//output: simply determine and return who is element zero
//Must deal with null error, must remove first
  if (katzDeliLine.length < 1)
  {return "There is nobody waiting to be served!"}
    else {

            return "Currently serving " + katzDeliLine.shift() + '.'
            katzDeliLine.shift()
          }
}

function currentLine(katzDeliLine) {
//output: return a nicely formatted list of the entire line
//1st output is undefined (fixed. It was because output had no value)
//somehow need to seperate the commas from the list (maybe some concat thing?)
  var count = 0;
  var formatting = [];
  var output = "";
  if (katzDeliLine.length < 1)
  {return "The line is currently empty."}
  else {

  //    output = "1. " + katzDeliLine.join(" " + (count+1) + ". ")        //doesn't advance numbers

    for (count = 0; count <= katzDeliLine.length-2; count++) {
      //trying to take out the last comma by making the last addition not have a comma
      //sucks. This one only outputs the last customer
      // if (count = katzDeliLine.length-1)
      // { output += (count+1) + ". " + katzDeliLine[count] }
      // else
      // { output += (count+1) + ". " + katzDeliLine[count] + ", " }

         output += (count+1) + ". " + katzDeliLine[count] + ", "        //this one is fine except for the last ,
        // output = (count+1) + ". " + katzDeliLine.join(", ")            //this one sucks, it skips commas

    }

    // while (count <= katzDeliLine.length-2)
    // {
    //   output += (count +1) + ". " + katzDeliLine[count] + ", "
    //   count ++;
    // }

    if (count == katzDeliLine.length-1)
    { output += (count +1) + ". " + katzDeliLine[count]
      count++                                         }

    //convert name into formatted count + name + comma in a completely different array
      // for (count = 0; count <= katzDeliLine.length-1; count++) {
      //   if (count = katzDeliLine.length-1)
      //   {formatting.push((count+1) + ". " + katzDeliLine[count] + ", ")}
      //   else
      //   {formatting.push((count+1) + ". " + katzDeliLine[count] + ", ")}
      //
      //   output = formatting.join()
      // }

    return "The line is currently: " + output
  }

}
