function takeANumber(queue, user){
queue.push(user)
return `Welcome, ${user}. You are number ${queue.length} in line.`

}
