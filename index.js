function takeANumber(queue, user){
queue.push(user)
return `Welcome, ${user}. You are number ${queue.length} in line.`

}
 function currentLine(queue){
   var pos = []
   if(!queue.length){
     return "The line is currently empty."
   }
   for (let counter = 0, p  =queue.length; counter<p;counter++){

     pos.push(`${counter + 1}. ${queue[counter]}`)
      }


      return `The line is currently: ${pos.join(', ')}`
 }

function nowServing(queue){

  if(!queue.length){
    return "There is nobody waiting to be served!"
  }
  else{

    var name  = queue[0]
    queue.splice(0,1)
    return `Currently serving ${name}.`
  }
}
