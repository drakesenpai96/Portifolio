import './HeaderLoja.css'


function HeaderLoja(){
    return(
        <div className='headerLoja'>
            <a href='/loja'>
                <img src='images/drakeshopLogo.png' alt='logoLoja' className='logoLoja'/>
            </a>
            <div className='headerBtn'>
                <a href="#">Produtos</a>
                <a href='/cadastro'>Minha conta</a>
                <a href="#">Carrinho</a>
            </div>
        </div>
    )
}

export default HeaderLoja