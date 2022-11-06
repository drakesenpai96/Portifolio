function Cadastro(){
    return(
        <div>
            <h1>Cadastro</h1>
            <form action="http://192.168.1.105:8080/cadastro" method='POST' encType='multipart/form-data'>
                <label htmlFor="nome">Nome</label>
                <input type="text" name='nome' id='nome' placeholder='Digite seu nome'/>
                    
                <label htmlFor="senha">Senha</label>
                <input type="password" name='senha' id='senha' placeholder='Digite sua senha'/>
                <button>Cadastrar</button>
            </form>
        </div>
    )
}

export default Cadastro