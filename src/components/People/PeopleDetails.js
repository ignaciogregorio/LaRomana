
import React, { useReducer, useState} from 'react'
import { gastoReducer } from "../Bills/gastoReducer";
import { PeopleDetailList } from './PeopleDetailList';
import { PeopleBillsInputs } from './PeopleBillsInputs';
import { Buttons } from '../Helpers/Buttons';
import { Totals } from '../Helpers/Totals';

import './people.scss'
import { cleanup } from '@testing-library/react';

export const PeopleDetails = ( { totalPlata, sinDuplicar } ) => {

    const [gasto, dispatch] = useReducer( gastoReducer, [])
    const [total, setTotal] = useState(0)
    const [click, setClick] = useState(false)
    const [open, setOpen] = useState(false)
    const [show, setShow] = useState(false)
    const [clean, setClean] = useState(true)
    const [name, setName] = useState('Ocultar detalle')

    
    const handleAdd = ( newGasto ) =>{
        
        dispatch({
            type: 'add',
            payload: newGasto
        })
        setClick(true)

    }
    const handleTotal = () => {
    
        const filtro = gasto.map( gas => gas.money )
        const totalMoney = filtro.reduce((a, b) => a + b)
        setTotal( totalMoney)
        setShow(true)
        handleClose()
        setClean(false)
        
    }
    
    const handleClose = () =>{
        setOpen(false)
    }
    const handleOpen = () => {
        setOpen(true)
    }

    const calculoRomana = ( ) =>{

        const sinDuplicados = gasto.reduce((acc, element) => {
            const index = acc.findIndex( name => name.name === element.name);

            if (index !== -1){
                acc[index].money += element.money;
            } else {
                acc.push(element);
            }

            return acc;
    
        }, []);
        
        sinDuplicar(sinDuplicados)
        totalPlata(total)

    }

    const changeName = () =>{
        setClick(!click)
        setName('Ocultar Detalle')
        if( click ){
            setName('Ver Detalle')
        }
    }   

  return (

    <>
        
        {   
        clean
    
        &&
            
        <>
        
            <PeopleBillsInputs 
                handleAdd={handleAdd}
            />
            {
                click
                &&
                <PeopleDetailList 
                    gasto = { gasto }
                />
            }
            {
                gasto.length > 0 
                &&
                <Buttons 
                    changeName = { changeName }
                    name = { name }
                    handleTotal ={ handleTotal }
                    open = { open }
                    handleClose = { handleClose }
                    handleOpen = { handleOpen }        
                />
            } 
        </>
        }

        {
            show
            &&
            <Totals
                total = { total }
                calculoRomana = { calculoRomana }
            />
        }
            
    </>
  )
}
