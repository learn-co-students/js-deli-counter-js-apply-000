function takeANumber(katzDeli, newClient) {
	katzDeli.push(newClient);
	return ('Welcome, ' + newClient + '. You are number ' + katzDeli.length + ' in line.')
}

function nowServing (katzDeliLine) {
    if(katzDeliLine.length===0) {
    return 'There is nobody waiting to be served!';
 }
    var client = katzDeliLine.shift();
    return "Currently serving " + client + ".";
 }

 var currentLine = function (katzDeliLine) {
  if (katzDeliLine.length===0) {
  return "The line is currently empty.";
}
   var clientNNumber = [];
    for (var i=0; i<katzDeliLine.length; i++) {
    clientNNumber.push(i + 1 + ". " + katzDeliLine[i])
 }
   return "The line is currently: " + clientNNumber.join(", ");
 }


 const deliLine = ["Steven", "Blake", "Avi"];
console.log(deliLine);
