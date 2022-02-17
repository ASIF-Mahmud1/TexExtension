
import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/styles';
import { dummyFormulaList } from '../../sample/formulae';
import FormulaSuggestion from './home/FormulaSuggestion';
import FormulaList from './home/FormulaList';

export default function App  () {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [formulaList, setformulaList] = useState([])
  const [selectedFormulaeList, setSelectedFormulaeList] = useState([])
  const [formulaCopied, setFormulaCopied] = useState(null);

  useEffect(() => {
    async function fetchFormulaList() {
    
    const response = [...dummyFormulaList]
      console.log("List of Formula ", response)
      setformulaList(response)
      setSuggestions(response)
    }

    fetchFormulaList()

  }, [])



  const handleCLear= () =>{
     setValue('')
  }
  
  const handleChange = (_id, value) => {
    console.log(_id, value);


    var indexToModify = selectedFormulaeList.findIndex(i => i._id === _id);
    let copyRows = [...selectedFormulaeList]
    if (indexToModify !== -1) {
      copyRows[indexToModify]['content'] = value;
    }
    setSelectedFormulaeList(copyRows)


  }

  const handleEditSymbols = (_id) => {

    const found = selectedFormulaeList.findIndex(element => element._id === _id)
    if (found === -1) {
      console.log("Something is wrong", found);
    }
    else {
      const modified = selectedFormulaeList[found]
      modified['findAndReplaceMode'] = !modified['findAndReplaceMode']
      let temp = [...selectedFormulaeList]
      temp[found] = modified
      setSelectedFormulaeList(temp)
    }

  }

  const theme = useStyles();
  
  const classes = useStyles()

  useEffect(()=>{
    console.log("formulaCopied is ",formulaCopied);
    if(formulaCopied)
    {
      handleAddingFormulaToList(formulaCopied)

    }
  },[formulaCopied])


  const handleAddingFormulaToList=(newFormula)=>{

   const found = selectedFormulaeList.find(element => element._id === newFormula._id)
   if(found===undefined)
   {
       const newList = [...selectedFormulaeList, {...newFormula,findAndReplaceMode: false}]
       setSelectedFormulaeList(newList)
   }
   else
   {
       console.log("Already added to  list !");
   }

  }

  
  return (
    <div  className={classes.container}  >
       <Button onClick={handleCLear}>Clear</Button>
        <FormulaSuggestion   suggestions ={suggestions} setSuggestions= {setSuggestions}   value ={value}   setValue ={setValue} formulaList={formulaList}  setFormulaCopied= {setFormulaCopied}/>
      
        <FormulaList formulae={selectedFormulaeList}  handleParentState={{handleEditSymbols, handleChange}}   />
    </div>
  );
};

const useStyles = makeStyles({
  container: {
    display:'inline'
  },

});