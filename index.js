const takeANumber = (arr, string) => {
  arr.push(string) 
  
  return 'Welcome, '+string +`. You are number ${arr.length} in line.` 
}

const nowServing = (arr) => {
  return  arr.length === 0 ? 'There is nobody waiting to be served!' : 'Currently serving '+arr.shift()+'.';
}

const currentLine = (arr) => {
  if(arr.length === 0) return 'The line is currently empty.';
  
  return arr.reduce((prev, curr, idx)=>{
    if(idx === arr.length - 1){
      prev += `${idx+1}. ${curr}`
    } else { 
      prev += `${idx+1}. ${curr}, `
    }
    return prev;
  },'The line is currently: ')
}