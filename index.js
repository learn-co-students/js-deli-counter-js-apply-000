const katzDeliLine = [];

function currentLine (x, y) {
  let line = [];
  if (x.length === 0) {
    return "The line is currently empty."
  } else {
    for (let i = 0; i < x.length; i++) {
      line += (i + 1) + ". " + x[i] + ", "
    }
    line = line.slice(0, line.length - 2)
    return "The line is currently: " + line
  }
}

//Technical explnation, line is a new array and if there isn't anything in it, it returns "The line is currently empty.". Else case, iterating through the array with a for loop (initialize i; condition of i; how many icrementations). i is set to 0; i is less than the length of our array; add 1. Concat operator (+=) for icrementing i and looping through our array. 

function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

//Analogy based explanation, it's like an electronic sign at the DMV saying where your position is and what your waiting time is going to be. If delis are like this one in particular, it could be a very long deli line.
//This one is pretty straight forward, it accepts a named parameter (in this case our global variable), and the name of the person we are going to serve. 

function nowServing (x, y) {
  if (x.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    let name = x[0]
    x.splice(0, 1);
    return "Currently serving " + name + "."
  }
}

//I like to think of the nowServing function as a clerk behind the deli counter after lunch hour; she has already taken the orders, ran the tickets, and everybody is eating. She is patiently waiting until a new line of customers approach the counter. Lo and behold he does, and let's say his name is Adam Enbar Ceo and co-founder of the Flatiron School (I know this isn't true and the it's not going to return that but I thought I'd humor my interviewer).

//Technical explanation: 
//Two parameters x & y, name of the person and the how many customers are currently in line. If the line is empty, it returns "There is nobody waiting to be served.". Else case, a new line forms and there is a new customer, name references the array and selects the first element. Splicing returns the first person and removes that person from the lne. Since we did that, our function can serve that person in line and then remove their ticket.