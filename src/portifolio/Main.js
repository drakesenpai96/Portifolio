import './Main.css'
import './Center.css'
import Header from './Header'
import Footer from './Footer'
import Banner from './Banner'
import {useRef, useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'


function Main(){

    return(
        
        <div className='fundo'>
            <Header/>
            <div className='center'>
                <div className='intro'>
                    
                    <div className='Imgs'>
                        <h1>Qualificações</h1>
                        <div className='imgContainer'>
                            <img src="/images/logos/logoHTML.png" alt="logo1" className='logoIntro'/>
                            <img src="/images/logos/logoCss.png" alt="logo2" className='logoIntro midle' />
                            <img src="/images/logos/logoJS.png" alt="logo3" className='logoIntro js' />
                        </div>
                        <div className='imgContainer'>
                            <img src="/images/logos/logoReact.png" alt="logo4" className='logoIntro'/>
                            <img src="/images/logos/logoWP.png" alt="logo5" className='logoIntro midle'/>     
                            <img src="/images/logos/logoPython.png" alt="logo6" className='logoIntro last'/>
                        </div>
                        <div className='imgContainer'>
                            <img src="/images/logos/logoLinux.png" alt="logo7" className='logoIntro'/>
                            <img src="/images/logos/logoNode.png" alt="logo8" className='logoIntro midle'/>
                            <img src="/images/logos/logoMySQL.png" alt="logo9" className='logoIntro last'/>
                        </div>
                    </div>
                    <div data-aos="fade-right" className='textContainer'>
                        <img src="/images/foto.png" alt="" className='perfil'/>
                        <span>
                            <h1>Desenvolvedor Web</h1>
                            <h1>FullStack</h1>
                        </span>
                    </div>
                </div>
                
                <div className='cont'>
                    <Banner></Banner>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Main