import { useState } from 'react';
import Chat from './Chat';
import {Button} from 'react-bootstrap/';
import './Chat.css'
import Dashboard from './Dashboard';


function LoginChat({socket}) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [conn, setCon] = useState()
  const [show, setShow] = useState(false)

  function EntrarSala(){
    if(username !== '' && password !== ''){
      let newLogin = {
        'user': username,
        'pass' : password
      }
      socket.emit('login', newLogin)
      socket.off('resplogin').on('resplogin', (data) =>{
        if(data.check){
          setCon(data.id)
          setShow(true)
        }
      })
      
    }
  }

  return (
    <div className="App">
      {!show ?(
        <div className='loginChat'>
          <div>
            <img src='/images/chat/logoChat.png' alt='logoChat' className='logoChat'></img>
          </div>
          <div className='chatLogin'>
            <label htmlFor="user">Usuário</label><br/>
            <input type="text" name='user' id='user' placeholder='Digite o usuário' onChange={(event) => {setUsername(event.target.value)}}/><br/>
            <label htmlFor="pass">Senha</label><br/>
            <input type="password" name="pass" id="pass" placeholder='Digite a senha' onChange={(event) => {setPassword(event.target.value)}}/><br/>
            <p className='CadLink'>
              Ainda não tem um login?<br/> 
              <a href='/cadChat'>Clique aqui e se cadastre agora!</a>
            </p>
            <Button variant="primary" className='loginBtn' onClick={EntrarSala}>Logar</Button>
          </div>
        </div>
      ) : (
        <Dashboard socket={socket} username={username} conn={conn}></Dashboard>
      )}  
    </div>
  );
}

export default LoginChat