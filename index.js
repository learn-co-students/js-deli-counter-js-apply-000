var katzDeliline = [];
var customerName = "";

function takeANumber(customer) {
  katzDeliline.push(customer);
  var customerOrder = katzDeliline.indexOf(customer) + 1;
  var result2 = ("Welcome, " + customer + ". You are number " + customerOrder + " in line.");
  console.log(result2);
  return result2;

  //console.log(katzDeliline.length);
}



function currentLine() {

    var i = 0;
    var lengthOfArray = katzDeliline.length;
    for(i;i < lengthOfArray;i++) {
        console.log("The line is currently " + parseInt(i + 1) + " " + katzDeliline[i]);
    };
    

}

function nowServing() {

    console.log("Currently serving " + katzDeliline[0] + ".");
    katzDeliline.shift();

}
