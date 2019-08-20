function takeANumber(queue, customer){
  queue.push(customer);
  return `Welcome, ${customer}. You are number ${queue.length} in line.`;
}

function nowServing(queue){
  if (queue.length < 1) {
    return 'There is nobody waiting to be served!';
  }
  let customer = queue[0];
  queue.shift();
  return `Currently serving ${customer}.`;
}

function currentLine(queue){
  if (queue.length < 1){
    return "The line is currently empty."
  } else {
    var output = "The line is currently: ";
     for (var i = 0; i < queue.length; i++){
        output += `${i+1}. ${queue[i]}, `;
     }
    return output.substring(0, output.length - 2);
  }
}