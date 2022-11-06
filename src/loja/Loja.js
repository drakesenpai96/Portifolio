import './Loja.css'
import React from 'react'
import {useEffect, useState} from 'react'
import {QRCodeCanvas} from 'qrcode.react'
import HeaderLoja from './HeaderLoja'
import  {Carousel, Card, Button}  from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function Loja(){
    const [prods, setProds] = useState([])

    const [pixCode, setPixCode] = useState({})

    //useEffect(() =>{
    //    fetch(`http://localhost:8080/pixGen.json?value=${encodeURIComponent(valor)}`)
    //    .then((response) => response.json())
    //    .then(setPixCode)
    //}, []
    useEffect(() => {
        fetch('http://192.168.1.105:8080/prods.json')
        .then((response) => response.json())
        .then(setProds)
    }, [prods])
    if(!prods || !prods.length) return null
    
    return(
        <div className='loja'>
            <HeaderLoja></HeaderLoja>
            <div className='test0'>
                <Carousel>
                    <Carousel.Item>
                        <a href="#"><img src='/images/bannerLoja1.png' alt='banner1' className='img0'/></a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="#"><img src='/images/bannerLoja2.png' alt='banner2' className='img0'/></a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="#"><img src='/images/bannerLoja3.png' alt='banner3' className='img0'/></a>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='carrosel'>
                {
                    prods.map((item) => {
                        const {id, img, nome, valor} = item
                        return(
                            <Card className='text-center' key={id}>
                                <Card.Img variant='top' src={img} alt='test'></Card.Img>
                                <Card.Title>{nome}</Card.Title>
                    <           Card.Text>
                                    <span>R${valor}</span>
                                </Card.Text>
                                <Button variant='danger'>Comprar</Button>
                            </Card>
                        )
                    })
                }
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default Loja