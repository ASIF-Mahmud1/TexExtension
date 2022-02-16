import React from 'react'
import {getSuggestions}  from '../../../helper/helper';
import AutoSuggest from "react-autosuggest";
import { makeStyles } from '@material-ui/styles';
import { RenderSuggestion } from '../../../helper/component';



export default function FormulaSuggestion  ({suggestions,setSuggestions,value, setValue, formulaList}) { 
    const theme = useStyles();

    return <AutoSuggest
                suggestions={suggestions}
                onSuggestionsClearRequested={() => setSuggestions([])}
                onSuggestionsFetchRequested={({ value }) => {
                    console.log(value);
                    setValue(value);
                    setSuggestions(getSuggestions(value, formulaList));
                }}

                getSuggestionValue={suggestion => suggestion.title}
                renderSuggestion={(suggestion) => <RenderSuggestion suggestion={suggestion} />}
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

}

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