

import { TableBody, TableCell, TableContainer, TableHead, TableRow, Table, Typography } from '@mui/material'
import Paper from '@mui/material/Paper';
import React from 'react'

export const RomanaList = ( { plata, division, cadauno } ) => {


  return (
    
    <>
      {
        plata.length >= 1
        &&
        <>
            <Typography 
              className='people-quantity'
              variant='body1'
              align='center'
              paragraph
            >   
                Total Cada uno: { cadauno.toLocaleString('es-CO', {style: 'currency', currency: 'COP', minimumFractionDigits: 0}) }
            </Typography>
        
        <TableContainer className='table-container' component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align='center'>Nombre</TableCell>
                <TableCell align='center'>Le deben / Paga</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {plata.map( (plat, index) =>

                    <TableRow key={index} >
                      <TableCell align='center'>{ plat.name }</TableCell>
                      <TableCell align='center'>{ (plat.money - division ).toLocaleString('es-CO', {style: 'currency', currency: 'COP', minimumFractionDigits: 0})}</TableCell>
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