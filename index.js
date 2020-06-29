function takeANumber(katzDeliLine, newCustomer){
    
    // create template for return message 
    let message = "Welcome, " + newCustomer + ". You are number " + (katzDeliLine.length+1) + " in line."
    
    //add new customer to que
    katzDeliLine.push(newCustomer)
    
    return message
}

function nowServing(katzDeliLine){
    
    // save first person in line
    let firstPerson = katzDeliLine[0]
    
    // shift line down 1 
    for(let i = 1; i <= katzDeliLine.length; i++){
        katzDeliLine[i-1] = katzDeliLine[i]

        if(katzDeliLine[i] === undefined)katzDeliLine.pop() //remove undefined entry that will be at the end of the array
    }
    
    // if nobody in line return "There is nobody waiting to be served!"
    if(!firstPerson) return "There is nobody waiting to be served!"
    // return the first person in line 
    return "Currently serving " + firstPerson + "." 
}

function currentLine(katzDeliLine){
    // Return line order as a string
    let curLine = "The line is currently: "

    //iterate through katzDeliLine
    for(let i = 0; i < katzDeliLine.length; i++){
        let linePosition = i+1
        let customer = katzDeliLine[i]

        // build on curLine string
        if( i === 0){
            curLine = curLine + linePosition + ". " + customer
        } else {
            curLine = curLine + " " + linePosition + ". " + customer
        }
        
        // if not at end 
        if(i != katzDeliLine.length-1) curLine = curLine + ","
    }

    if(curLine === "The line is currently: ") return "The line is currently empty."
    
    // return currentline of people as a string
    return curLine
}