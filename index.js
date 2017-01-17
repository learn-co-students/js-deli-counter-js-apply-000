var katzDeliLine;
function takeANumber(katzDeliLine, name) {
  var katzDeli = [];
  for (var i = 0; i < katzDeliLine.length; i++){
    katzDeli.push(katzDeliLine[i]);
    katzDeli.push(name.length[i]);
  }
  console.log ('Welcome, ' + name [i] + '.'+ 'You are 		number ' +  katzDeli[i + 1] + 'in line.')
  return katzDeli
};
takeANumber([katzDeliLine, katzDeliLine, katzDeliLine, katzDeliLine],["Ada", "Grace", "Kent"]);

/*function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
    "Currently serving " + katzDeliLine[0] + ".";
    katzDeliLine.shift();
    } else {
    return "There is nobody waiting to be served!";
    }
};*/

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  var temp = katzDeliLine[0];
  katzDeliLine.shift();
  return "Currently serving " + temp + ".";
}
//dont put katzDeliLine as global

function currentLine(katzDeliLine) {
   if (katzDeliLine.length > 0) {
     var placesPlease = katzDeliLine.forEach(function(element, index) {
        (index + 1 + ". " + element + " ");
      });
     return "The line is currently: " + placesPlease;
     } else {
             return "The line is currently empty."
             }
    }
};
/*? I'm pretty sure the .forEach
won't actually return those values = placesPlease will always be undefined.
one way to approach this, is to create
something to store the data in. then each
time you iterate through the line,
you can move these strings into that data store*/
