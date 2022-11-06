import {useRef, useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

function CadCon(){
    let Nav = useNavigate()
    
    useEffect(()=>{
        Nav('/loja')
    }, [])
}

export default CadCon