
import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button'
import AutoSuggest from "react-autosuggest";
//import { listFormula } from './api-formula'
import { makeStyles } from '@material-ui/styles';
import { dummyFormulaList } from '../../sample/formulae';
import { RenderSuggestion } from '../../helper/component';
import  Table from './Table';
export default function App  () {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [formulaList, setformulaList] = useState([])
  useEffect(() => {
    async function fetchFormulaList() {
    //  const response = await listFormula()
    const response = [...dummyFormulaList]
      console.log("List of Formula ", response)
      setformulaList(response)
      setSuggestions(response)
    }
    fetchFormulaList()
  }, [])


  function getSuggestions(value) {
    const userInputLength= value.length
    let lowerCasedSuggestions= formulaList.map(company => {
      return {
        id: company.id,
        title: company.title.toLowerCase(),
        html: company.html,
        content: company.content
      };
    });
    return lowerCasedSuggestions.filter(company =>
      company.title.substr(0, userInputLength).trim()===value.trim().toLowerCase()
    );
  }




  const handleCLear=()=>{
    setValue('')
  }
  const theme = useStyles();
  return (
    <div style={{display:'inline'}}>
       <Button onClick={handleCLear}>Clear</Button>
      <AutoSuggest
        suggestions={suggestions}
        onSuggestionsClearRequested={() => setSuggestions([])}
        onSuggestionsFetchRequested={({ value }) => {
          console.log(value);
          setValue(value);
          setSuggestions(getSuggestions(value));
        }}
        onSuggestionSelected={(_, { suggestionValue }) =>
          console.log("Selected: " + suggestionValue)
        }
        getSuggestionValue={suggestion => suggestion.title}
        renderSuggestion={(suggestion)=><RenderSuggestion suggestion={suggestion} />}
        inputProps={{
          placeholder: "Type formula title",
          value: value,
          onChange: (_, { newValue, method }) => {
            setValue(newValue);
          }
        }}
        highlightFirstSuggestion={true}
        theme={theme}

      />
   
     {/* <Table/> */}
    </div>
  );
};

const useStyles = makeStyles({
  container: {
    position: "relative",
  },
  input: {
    width: "240px",
    height: "60px",
    width: '80%',
    padding: "10px 20px",
    fontFamily: "Helvetica, sans-serif",
    fontWeight: "bold",
    fontSize: "16px",
    border: "1px solid #aaa",
    borderRadius: "4px"
  },
  inputFocused: {
    outlineStyle: "none"
  }
  // add other styling here...
});