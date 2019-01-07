var katzDeli = [];
var data = katzDeli.length;
function takeANumber(katzDeli){
  //Pushes the name variable into the katzDeli variable
  data += 1
  katzDeli.push(data);
  //Returnes the Welcome with the persons name and number. The number is generated by getting the katzDeli length.
  //And since we are always adding people to the back of the line the number will always be the full length of the array.
  return "Welcome. You are number " + data + " in line.";
}


function nowServing(katzDeli){
  if (katzDeli.length < 1){
    //If there is no more than 0 people in line (If the line is empty)
    return "There is nobody waiting to be served!";
  }else{
    //Returns "Currently serving + name" by getting the first person from the katzDeli line and assigning it to a
    //variable so that we could remove the name from the array and then return it without causing errors.
    var serving = "Currently serving " + katzDeli[0] + ".";
    katzDeli.shift();
    return serving
  }
}


function currentLine(katzDeli){
  if(katzDeli.length < 1){
    //If there is no more than 0 people in line (If the line is empty)
    return "The line is currently empty.";
  }else{
    //// Alternative method for adding ", " instead of using the .join() method.
    // var line = "The line is currently:";
    // for(var i = 0; i < katzDeli.length; i++){
    //   line += " " + (i + 1) +". "+ katzDeli[i];
    //   if (i + 1 < katzDeli.length){
    //     line += ","
    //   }
    // }
    // return line

    //Created a var currline to store all of the people and their assigned numbers.
    var currline = []
    //Created a for loop to iterate through all of the objects of the katzDeli array
    //And set the loop to happend once for every element in the katzDeli array
    for(var i = 0; i < katzDeli.length; i++){
      //The loop will fill up the currline array with the number and a name everytime it is run
      //I use the i+1 because we want to display a normal number for a user and not a number that a programmer will know the meaning of
      //Like the first number beeing 0 insead of 1
      currline.push((i + 1) + ". " +katzDeli[i])
    }
    //Returns "The line is currently: " + all of the elements of currline joined and separated with a ", "
    return "The line is currently: "+currline.join(", ")
  }
}

takeANumber(katzDeli, "Nick");
takeANumber(katzDeli, "Jose");
takeANumber(katzDeli, "Mush");

nowServing(katzDeli);
takeANumber(katzDeli, "Tush");
console.log(katzDeli);


//currentLine(katzDeli);
console.log(currentLine(katzDeli))
