import React from 'react'
import { Box, Button, Typography } from '@mui/material';

export const Totals = ({total, calculoRomana}) => {

  return (

    <>
        <Typography 
            className='people-quantity'
            variant='body1'
            align='center'
            paragraph
        >   
            TOTAL GASTOS:  { total.toLocaleString('es-CO', {style: 'currency', currency: 'COP', minimumFractionDigits: 0}) } 
        </Typography>

        <Box
            sx={{
                textAlign: 'center',
                marginTop: '50px',
                marginBottom: '50px'
            }}  
        >
            <Button
                variant='outlined'
                onClick={calculoRomana}> Calcular Romana
            </Button>
        </Box>

            
    </> 
  )
}
