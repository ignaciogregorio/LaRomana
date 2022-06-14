

import React from 'react'
import { useForm } from '../../UseForm/useForm'
import { Button, Input, TextField } from '@mui/material'

import './people.scss'



export const PeopleBillsInputs = ( { handleAdd } ) => {

  const [ {name, concept, money}, handleChange, reset ] = useForm({
    name: '',
    concept: '',
    money: ''
  })

  const handleSubmit = (e) =>{
        
    e.preventDefault()

    const newGasto = {
        name: name,
        concept: concept,
        money: + money
    }

    handleAdd( newGasto )
    
    reset()
}


  return (


    <form onSubmit={handleSubmit}>
      
      <Input
        className='input-style'
        id="filled-basic"
        variant="filled"
        name='name'
        value= {name}
        required
        placeholder='Nombre'
        onChange={ handleChange }
        autoComplete= 'off'
        />
      <Input
        className='input-style'
        id="filled-basic"
        variant="filled"
        name='concept'
        value={concept}
        required
        placeholder='Concepto'
        onChange={ handleChange }
        autoComplete= 'off'
        />
      <Input 
        className='input-style'
        id="filled-basic"
        variant="filled"
        name='money'
        value={money}
        required
        placeholder='$'
        onChange={ handleChange }
        autoComplete= 'off'
        />
      <Button className='people-button' type='submit' variant="outlined"> Agregar </Button>
    </form>
    

      

  )
}
