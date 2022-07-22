const stringLength = (str) => {
  let count = 0;
  str.split('').forEach(_char => count++);
  return count;
}


const reverseString = (str) => {
  let newStr = [];
  for(let i = str.length - 1; i >= 0; i--){
    newStr.push(str[i]);
  }
  return newStr.join('');
}

export {
  // Calculator,
  stringLength,
  reverseString
};
