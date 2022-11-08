import { useState } from 'react';
import {Button, Modal} from 'react-bootstrap/';
import './Chat.css'
import {useNavigate} from 'react-router-dom'

function ChatCadastro({socket}){

    const Nav = useNavigate()

    const [user, setUser] = useState()
    const [pass, setPass] = useState()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    function sendLogin(){
        Nav('/chat')
    }

    function Cadastrar(){
        if(user === '' && pass === ''){
            handleClose()
        }
        else{
            setShow(true)
            let newUser = {
                'usuario': user,
                'senha': pass
            }
    
            socket.emit('cadUser', newUser)
        }
        
    }

    return(
        <div>
            <div className='loginChat'>
                <div>
                    <img src='/images/chat/logoChat.png' alt='logoChat' className='logoChat'></img>
                </div>
                <div className='chatLogin'>
                    <label htmlFor="user">Crie seu usuário</label><br/>
                    <input type="text" name='user' id='user' placeholder='Digite o usuário' onChange={(event) => {setUser(event.target.value)}}/><br/>
                    <label htmlFor="pass">Crie sua senha</label><br/>
                    <input type="password" name="pass" id="pass" placeholder='Digite a sala' onChange={(event) => {setPass(event.target.value)}}/><br/>
                    <Button variant="primary" className='cadBtn' onClick={Cadastrar}>Cadastrar</Button>
                </div>
                <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Usuário cadastrado com sucesso !</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Efetue o login para começar
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={sendLogin}>
                        Confirmar
                    </Button>
                </Modal.Footer>
            </Modal>
            </div>
        </div>
    )
}

export default ChatCadastro