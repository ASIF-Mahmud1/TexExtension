import React, { useState, useEffect, Fragment } from 'react'

import { Button, Typography, Paper, TableRow, TableHead, TableContainer, TableCell, TableBody, Table, TextField } from '@material-ui/core'

import { sammpleFormula, dummyFormulaList } from '../../sample/formulae';
import { findUnique, replaceAll, doWhichKey, countString } from '../../helper/helper'

export default function SubstituteLetter({ findAndReplaceMode, formula }) {
    const uniqueLetter = findUnique(formula)
    console.log("unique Letter ", uniqueLetter);
    return (
        <Fragment>
            {
                findAndReplaceMode === true ?

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
                                {uniqueLetter.map((row, index) => (
                                    <TableRow
                                        key={row._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row}
                                        </TableCell>
                                        <TableCell align="right">
                                            <TextField multiline={true} style={{ width: 500 }} value={row} />


                                        </TableCell>
                                        <TableCell align="right">
                                            <span> {formula}</span>
                                        </TableCell>

                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>

                    </TableContainer>

                    :
                    <Typography>Preview Mode</Typography>
            }
        </Fragment>
    )
}

