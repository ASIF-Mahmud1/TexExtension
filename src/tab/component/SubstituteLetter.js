import React, { useState, useEffect, Fragment } from 'react'

import { Button, Typography, Paper, TableRow, TableHead, TableContainer, TableCell, TableBody, Table, TextField } from '@material-ui/core'

import { sammpleFormula, dummyFormulaList } from '../../sample/formulae';
import { findUnique, replaceAll, doWhichKey, countString } from '../../helper/helper'
import MathJax from 'react-mathjax-preview'

export default function SubstituteLetter({ findAndReplaceMode, formula,table }) {
    const uniqueLetter = findUnique(formula).map((item)=>{
        return {
            currentValue: item,
            newValue:item
        }
    })

    const [rows, setRows] = useState(uniqueLetter)
    const [updatedFormula, setUpdatedFormula] = useState(formula)
    const handleChange = (currentValue, newValue) => {
        console.log(currentValue, newValue);
    
    
        var indexToModify = rows.findIndex(i => i.currentValue === currentValue);
        let copyRows = [...rows]
        if (indexToModify !== -1) {
          copyRows[indexToModify]['newValue'] = newValue;
        }
        // const value= copyRows.map((item)=> item.updatedFormula).join("");
        // console.log("Value is ",value);
        const temp = replaceAll(formula,currentValue,newValue)
          console.log("temp is ",temp, renderFormula_v2(temp));
          
        setRows(copyRows)
        setUpdatedFormula(renderFormula_v2(temp))
    
    
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
                if(table[query]===undefined)
                {
                    result= result+list[i]
                }
                else 
                {
                    result=result+ table[query].content
                     i= i+ (processed.substring(0,next$).trim()).length
                }
                
              }
    
           }
           else 
           {
              result= result+list[i]
           }
       }
    
       return result= result
        
    };

    return (
        <Fragment>
            {
                findAndReplaceMode === true ?
                  <>
                     <Typography style={{textAlign:'center'}}> Before  <MathJax math={"`" + formula + "`"} /></Typography>
                     <Typography style={{textAlign:'center'}}> After  <MathJax math={"`" + updatedFormula + "`"} /></Typography>

                    <TableContainer component={Paper} >
                        <Table sx={{ minWidth: 50 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="right">Current</TableCell>
                                    <TableCell align="right">New</TableCell>
                                    <TableCell>Preview</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row, index) => (
                                    <TableRow
                                        key={row}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.currentValue}
                                        </TableCell>
                                        <TableCell align="right">
                                            <TextField multiline={true} style={{ width: 500 }} value={row.newValue} onChange={(e)=>handleChange(row.currentValue,e.target.value )} />


                                        </TableCell>
                                        <TableCell align="right">
                                            <span> <MathJax math={"`" + updatedFormula + "`"} /></span>
                                        </TableCell>

                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>

                    </TableContainer>
                    </>
                    :
                    <Typography>Preview Mode</Typography>
            }
        </Fragment>
    )
}

