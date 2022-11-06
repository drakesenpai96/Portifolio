import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import {Link} from 'react-router-dom'
import './Banner.css'

function Banner(){
    useEffect(() => {
        Aos.init({duration: 1000})
    }, [])

    return(
        <div data-aos="zoom-in" className="banner">
            <div className='banner0'>
                <div>
                    <h1 className='btnT'>Modelos</h1>
                </div>
                
            </div>
            <div className='Btns'>
                <ul>
                    <li>
                        <Link to='/loja' className='btn0'>e-Commerce</Link>
                    </li>
                    <li>
                        <Link to='/blog' className='btn0'>Blog</Link>
                    </li>
                    <li>
                        <Link to='/game' className='btn0'>Game</Link>
                     </li>
                </ul>
            </div>
        </div>
    )
}

export default Banner