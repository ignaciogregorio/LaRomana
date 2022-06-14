import { Button, Input } from '@mui/material'
import React from 'react'
import { useForm } from '../../UseForm/useForm'

import './people.scss'


export const People = ( { qtyPersonas } ) => {

  const [ {cantidad}, handleChange ] = useForm({
  
    cantidad: ''
  
  })
  

  const handleSubmit = (e) => {
    
    e.preventDefault()
    qtyPersonas( + cantidad )
  
  }


  return (

    <>
      {
        <form onSubmit={ handleSubmit }>
          <Input 
            onChange={ handleChange } 
            className= 'input-style'
            type="number"
            name='cantidad'
            value={cantidad}
            placeholder='Cuantos Somos?'
            required
          />
          <Button className='people-button' type='submit' variant="outlined"> Confirmar</Button>
        </form>
      }
      
    </>
  )
}