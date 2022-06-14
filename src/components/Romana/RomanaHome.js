import React, { useEffect, useState } from 'react'

import { People } from '../People/People'
import { PeopleDetails } from '../People/PeopleDetails'
import { RomanaList } from './RomanaList'
import { Typography } from '@mui/material'


import './romanahome.scss'

export const RomanaHome = () => {

  const [totalPeople, setTotalPeople] = useState()
  const [division, setDivision] = useState(0)
  const [plata, setPlata] = useState([])
  const [show, setShow] = useState(true)

  const qtyPersonas = ( qty ) => {

    setTotalPeople( + qty )
    setShow(false)
  }
  
  const romana = ( total ) => {
    const cadaUno = Math.round(total / totalPeople)
    setDivision(cadaUno)
  }

  const calc = ( money ) => {

    setPlata( money)

  }
  
 
  return (

    <div className='home-container'>
      <Typography 
        className='title' 
        variant='h1' 
        align='center' 
        paragraph>
        LA ROMANA
      </Typography>
      <Typography 
        className='subtitle' 
        variant='h3' 
        align='center' 
        gutterBottom>
        Calculadora para dividir Gastos
      </Typography>
        
        {
          show
          ?
          <People
            qtyPersonas={ qtyPersonas }
          />
          :
          <>
            <Typography 
              className='people-quantity'
              variant='body1'
              align='center'
              paragraph>
              Cantidad de Personas: { totalPeople }
            </Typography>
            <PeopleDetails
                totalPlata={ romana }
                sinDuplicar= {calc}
            />
            <RomanaList
              cadauno={ division }
              plata={plata}
              division={division}
            />
          </>
        }
    </div>
  )
}