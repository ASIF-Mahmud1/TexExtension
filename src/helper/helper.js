const  replaceAll=(str, find, replace)=> {
    return str.replace(new RegExp(find, 'g'), replace);
  }

  const  findUnique=(str)=>{
 
    // Split the string to make array
    str = str.split("")
     
    // Create a set using array
    str = new Set(str);
     
    // Convert the set into array using spread
    // operator and join it to make string
   // str = [...str].join("");
   str = [...str]
     
    return str;
  }

  const doWhichKey=(e)=> {  
 
    e = e || window.event; 
    let charCode = e.keyCode || e.which; 

    return String.fromCharCode(charCode); 
  } 
  const countString=(str, letter) =>{
    let count = 0;

    // looping through the items
    for (let i = 0; i < str.length; i++) {

        // check if the character is at that position
        if (str.charAt(i) == letter) {
            count += 1;
        }
    }
    return count;
}
  let text = "`x=  (-b+-sqrt(b^2 -4ac))  /(2a)`";
  const temp="\int_0^2x^2dx" 
  const replaceWith= "("+ temp+ ")"
  let result =replaceAll(text,"b",replaceWith)
  console.log(result);


const getSuggestions = (value, formulaList) => {
  const userInputLength = value.length
  let lowerCasedSuggestions = formulaList.map(company => {
    return {
      _id: company._id,
      title: company.title.toLowerCase(),
      html: company.html,
      content: company.content
    };
  });
  return lowerCasedSuggestions.filter(company =>
    company.title.substr(0, userInputLength).trim() === value.trim().toLowerCase()
  );
}

  export {
    replaceAll,
    findUnique,
    doWhichKey,
    countString,
    getSuggestions
  }
