function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
  }
  let text = "`x=  (-b+-sqrt(b^2 -4ac))  /(2a)`";
  const temp="\int_0^2x^2dx" 
  const replaceWith= "("+ temp+ ")"
  let result =replaceAll(text,"b",replaceWith)
  console.log(result);