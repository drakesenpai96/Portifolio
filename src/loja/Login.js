function Login(){
    return(
        <div>
            <h1>Login</h1>
            <form action="http://192.168.1.105:8080/login" method='POST'>
                <label htmlFor="nome">Nome</label>
                <input type="text" name='user' id='user' placeholder='Digite seu nome'/>
                    
                <label htmlFor="senha">Senha</label>
                <input type="password" name='pass' id='pass' placeholder='Digite sua senha'/>
                <button>Logar</button>
            </form>
        </div>
    )
}

export default Login