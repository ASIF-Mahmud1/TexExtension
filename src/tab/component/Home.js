
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
  const [selectedFormulae, setSelectedFormulae] = useState([])

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
  
  const theme = useStyles();
  
  const classes = useStyles()

  return (
    <div  className={classes.container}  >
       <Button onClick={handleCLear}>Clear</Button>
        <FormulaSuggestion 
          suggestions ={suggestions}
          setSuggestions= {setSuggestions}
          value ={value}
          setValue ={setValue}
          formulaList={formulaList}
        />
      <FormulaList formulae={selectedFormulae} />
    </div>
  );
};

const useStyles = makeStyles({
  container: {
    display:'inline'
  },

});