import './Loja.css'
import './HeaderLoja.css'
import React from 'react'
import {useEffect, useState} from 'react'
import {QRCodeCanvas} from 'qrcode.react'
import  {Carousel, Card, Button, Navbar, Container, Nav,}  from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function Loja(){
    const [prods, setProds] = useState([])

    useEffect(() => {
        fetch('http://192.168.1.105:8080/prods.json')
        .then((response) => response.json())
        .then(setProds)
    }, [prods])
    
    return(
        <div className='loja'>
            <Navbar className='topo' variant='dark'>
                <Container>
                    <Navbar.Brand href='/loja'><img src='images/loja/drakeshopLogo.png' alt='logoLoja' className='logoLoja'/></Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
                    <Navbar.Collapse id='basic-navbar-nav' className='btnNav'>
                        <Nav className='me-auto'>
                            <Nav.Link href='/loja' className='letters'>Home</Nav.Link>
                            <Nav.Link href='#' className='letters'>Produtos</Nav.Link>
                            <Nav.Link href='/login' className='letters'>Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className='test0'>
                <Carousel>
                    <Carousel.Item>
                        <a href="#"><img src='/images/loja/bannerLoja1.png' alt='banner1' className='img0'/></a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="#"><img src='/images/loja/bannerLoja2.png' alt='banner2' className='img0'/></a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="#"><img src='/images/loja/bannerLoja3.png' alt='banner3' className='img0'/></a>
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