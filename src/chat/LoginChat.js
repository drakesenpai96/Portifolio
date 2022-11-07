import { useState } from 'react';
import Chat from './Chat';



function LoginChat({socket}) {
  const [username, setUsername] = useState('')
  const [sala, setSala] = useState('')
  const [show, setShow] = useState(false)

  function EntrarSala(){
    if(username !== '' && sala !== ''){
      socket.emit('entrarSala', sala)
      setShow(true)
    }
  }

  return (
    <div className="App">
      {!show ?(
        <div className='entrarSala'>
          <h1>Entrar no chat</h1>
          <label htmlFor="user">Usuário</label>
          <input type="text" name='user' id='user' placeholder='Digite o usuário' onChange={(event) => {setUsername(event.target.value)}}/><br/>
          <label htmlFor="room">Sala</label>
          <input type="text" name="room" id="room" placeholder='Digite a sala' onChange={(event) => {setSala(event.target.value)}}/><br/>
          <button onClick={EntrarSala}>Logar</button>
        </div>
      ) : (
        <Chat socket={socket} username={username} sala={sala}></Chat>
      )}  
    </div>
  );
}

export default LoginChat