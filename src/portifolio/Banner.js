import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import './Banner.css'

function Banner(){

    let nav = useNavigate()

    useEffect(() => {
        Aos.init({duration: 1000})
    }, [])
    function BtnClick(props){
        let btn = props.target.className
        let attbtn = btn.replace('btns ', '')
        switch(attbtn){
            case 'Loja':
                nav('/loja')
                break
            case 'chat':
                nav('/chat')
                break
            case 'baby':
                nav('/game')
                break
        }
    }
    return(
        <div data-aos="zoom-in" className="banner">
            <div className='banner0'>
                <h1 className='btnT'>Projetos</h1>
            </div>
            <div className='Btns'>
                <button className='btns Loja' onClick={BtnClick}>Loja online</button>
                <button className='btns chat' onClick={BtnClick}>Chat</button>
                <button className='btns baby' onClick={BtnClick}>BabyFlix</button>
            </div>
        </div>
    )
}

export default Banner