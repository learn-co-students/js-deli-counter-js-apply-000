function takeANumber(theLine, newCustomer){

  var placeInLine = theLine.length + 1
  theLine.push (newCustomer)
  return ("Welcome, " + newCustomer + ". You are number " + placeInLine + " in line.")

}


function nowServing(theLine){

  if (theLine.length == 0) {

    theLine.shift()
    theLine


    return ("There is nobody waiting to be served!")
  } else {

    var customerServing= theLine[0]
    theLine.shift()
    theLine

    return ("Currently serving " + customerServing + ".")
  }

}

function currentLine(theLine){

  if (theLine.length == 0) {

    return ("The line is currently empty.")

  } else {

    var i = 0
    var theQueue = []
    var whosInLine = "The line is currently: "


    while (i < (theLine.length -1)) {

      theQueue.push([i+1] + ". " + theLine[i])
      whosInLine = whosInLine + theQueue[i] + ", "
      i++

    }

    theQueue.push([i+1] + ". " + theLine[i])

    whosInLine = whosInLine + theQueue[i]

    return (whosInLine)
  }

}
