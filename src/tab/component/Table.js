import React, { useState, useEffect } from 'react'

import { Button, Typography, Paper, TableRow, TableHead, TableContainer, TableCell, TableBody, Table, TextField } from '@material-ui/core'

import { sammpleFormula, dummyFormulaList } from '../../sample/formulae';
import MathJax from 'react-mathjax-preview'
import { findUnique, replaceAll, doWhichKey, countString } from '../../helper/helper'
import SubstituteLetter from './SubstituteLetter';
export default function BasicTable() {
  const formatSammpleFormula = sammpleFormula.map((item) => {
    return {
      ...item,
      findAndReplaceMode: false
    }
  })
  const [rows, setRows] = useState(formatSammpleFormula)
  const handleChange = (_id, value) => {
    console.log(_id, value);


    var indexToModify = rows.findIndex(i => i._id === _id);
    let copyRows = [...rows]
    if (indexToModify !== -1) {
      copyRows[indexToModify]['content'] = value;
    }
    setRows(copyRows)


  }

  const renderFormula = (value) => {

    const dollarFound = countString(value.content, "$");


    if (dollarFound == 2) {
      const firstIndexOfDollar = value.content.indexOf('$')
      const lastIndexOfDollar = value.content.lastIndexOf('$')
      const mahQuery = value.content.substring(firstIndexOfDollar + 1, lastIndexOfDollar)

      if (rows[mahQuery]?.content) {
        var txt2 = value.content.slice(0, firstIndexOfDollar) + rows[mahQuery].content + value.content.slice(lastIndexOfDollar + 1);

        return <MathJax math={"`" + txt2 + "`"} />
      }
      return <MathJax math={"`" + value.content + "`"} />

    }
    else {

      return <MathJax math={"`" + value.content + "`"} />

    }


  }


  var renderFormula_v2 = function(list ) {
    let result= ''
   for(let i=0;i<list.length;i++)
   {
  
       if(list[i]==="~")
       {
          let processed= list.slice(i+1, list.length)
          let next$= processed.indexOf("~")
          if(next$!==-1)
          {
            const query= processed.substring(0,next$).trim()
            if(rows[query]===undefined)
            {
                result= result+list[i]
            }
            else 
            {
                result=result+ rows[query].content
                 i= i+ (processed.substring(0,next$).trim()).length
            }
            
          }

       }
       else 
       {
          result= result+list[i]
       }
   }

   return  <MathJax math={"`" + result + "`"} />
    
};


  const handleEditSymbols = (value) => {

    const found = rows.findIndex(element => element._id === value._id)
    if (found === -1) {
      console.log("Something is wrong", found);
    }
    else {
      const modified = rows[found]
      modified['findAndReplaceMode'] = !modified['findAndReplaceMode']
      let temp = [...rows]
      temp[found] = modified
      setRows(temp)
    }

  }

  return (
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Serial No.</TableCell>
            <TableCell align="right">Content</TableCell>
            <TableCell align="right">Preview</TableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row._id}
              </TableCell>
              <TableCell align="right">
                <TextField multiline={true} style={{ width: 500 }} value={row.content} onChange={(e) => { handleChange(row._id, e.target.value) }} />

                {
                  row.findAndReplaceMode === false ?
                    <Button onClick={() => handleEditSymbols(row)}>
                      <Typography>Find and Replace</Typography>
                    </Button>
                    :
                    <Button >
                      <Typography>Save</Typography>
                    </Button>

                }

                <SubstituteLetter findAndReplaceMode={row.findAndReplaceMode} formula={row.content} table= {rows} />
              </TableCell>
              <TableCell align="right">
                {/* <span> {renderFormula(row)}</span> */}
                <span> {renderFormula_v2(row.content)}</span>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>

    </TableContainer>
  );
}