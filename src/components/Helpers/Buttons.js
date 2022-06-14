

import React from 'react'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material';



export const Buttons = ({changeName, name, handleTotal,  handleOpen, open, handleClose}) => {


    return (
        
        <Box 
            sx={{
                textAlign: 'center',
                marginTop: '50px',
                marginBottom: '50px'
            }}>
            <Button
                variant='outlined'
                onClick={ changeName }> {name}
            </Button>
            <Button
                variant='outlined'
                onClick={ handleOpen }> Calcular Total
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                {"Desea calcular el total?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Por favor, revisar la cuenta antes de calcular
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Button onClick={handleTotal} autoFocus>
                        Calcular total
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>

        
        
    )
}
