

import { TableBody, TableCell, TableContainer, TableHead, TableRow, Table } from '@mui/material'
import Paper from '@mui/material/Paper';
import React from 'react'

export const PeopleDetailList = ( { gasto } ) => {

  return (
    
    <>
      {
        gasto.length >= 1
        &&
        <>
        
        <TableContainer className='table-container' component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align='center'>Nombre</TableCell>
                <TableCell align='center'>Gasto</TableCell>
                <TableCell align='center'>Importe</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {gasto.map( (gas, index) =>
                  
                    <TableRow key={index} >

                      <TableCell align='center'>{ gas.name }</TableCell>
                      <TableCell align='center'>{ gas.concept}</TableCell>
                      <TableCell align='center'>{ gas.money.toLocaleString('es-CO', {style: 'currency', currency: 'COP', minimumFractionDigits: 0})}</TableCell>

                    </TableRow>
                  
                  )
              }
              </TableBody>
          </Table>
          </TableContainer>
        </>
      }
    </>
        


  )
}
