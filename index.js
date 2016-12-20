
function takeANumber(katzDeliLine,name){

          katzDeliLine.push(name);

      var customerPosition = katzDeliLine.indexOf(name) + 1;

    return "Welcome, " + name + ". You are number " + customerPosition + " in line."
};

// =========================================================

function nowServing(katzDeliLine){

            if (katzDeliLine.length > 0){

                    var firstPlace = katzDeliLine[0];
                         katzDeliLine.shift();
                      return "Currently serving " + firstPlace + "."

                                          } else {
           return "There is nobody waiting to be served!";
                                                  }
                                }

// =========================================================
function currentLine(katzDeliLine){
    if (katzDeliLine.length > 0){
            var placesPlease = [];

                 katzDeliLine.forEach(function(element, index) {
                      placesPlease.push(" " + (index + 1) + ". " + element);

                  });


          return "The line is currently:" + placesPlease;

                                 }
    else {
            return "The line is currently empty."
          }
}



// ?///////// ????????????????????????

// function currentLine (katzDeliLine){
//
//               if (katzDeliLine > 0){
//
//                                var n = 0;
//
//                      while (n < katzDeliLine.length){
//
//                                    for (let p in katzDeliLine) {
//                                                return p + 1
//                                                                 };
//
//                                    for (c of katzDeliLine){
//                                                 return  c
//                                                                 };
//
//                      n++;
//
//                     //  katzDeliLine[n]  something?  How do have the loop move from one object to the next?
//                                                             }
//
//                     //
//                     // return "The line is currently: " + p + "." + c +
//
//
//                                             } else {
//
//                          return "The line is currently empty."
//
//                        };
//
//
//
// };
