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
                <button className='btns Loja' onClick={BtnClick}>
                    <div>
                        <a href='/loja'><img src='images/loja/drakeshopLogo.png' alt='logoLoja' className='logoIntro imgBtn'></img></a>
                    </div>
                    Loja online
                </button>
                <button className='btns chat' onClick={BtnClick}>
                    <div>
                        <a href='/chat'><img src='images/chat/logoChat.png' alt='logoLoja' className='logoIntro imgBtn'></img></a>
                    </div>
                    Chat
                </button>
                <button className='btns baby' onClick={BtnClick}>
                    <div className='babyCont'>
                        <a href='/game'><img src='images/babyflix/logoBabyflix.png' alt='logoLoja' className='logoIntro imgBtn babyImg'></img></a>
                    </div>
                    BabyFlix
                </button>
            </div>
        </div>
    )
}

export default Banner