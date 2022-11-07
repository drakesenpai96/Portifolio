import { useEffect, useState } from "react"

function Chat({socket, username, sala}){
    const [message, setMessage] = useState('')
    const [recvMen, setRecvMen] = useState([{}])

    function mandarMensagem(){
        if(message !== ''){
            const mensagemData = {
                'sala': sala,
                'user': username,
                'mensagem': message,
                'hora' : new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes()
            }
            
            socket.emit('sendMensagem', mensagemData)
            setRecvMen((list) => [...list, mensagemData])

        }
    }

    useEffect(() =>{
        socket.off('mensagemEnviada').on('mensagemEnviada', (data) =>{
            console.log(data)
            setRecvMen((list) => [...list, data])
        })
    }, [socket])

    return(
        <div className="">
            <div className="chatHeader">
                <h2>Chat em tempo real</h2>
            </div>
            <div className="chatBody">
                {!recvMen ? 
                    (<>test</>)
                : (recvMen.map((men) =>{
                    return(
                        <div>
                            <div className="usuario">
                                <span>{men.user}</span><br/>
                            </div>
                            <div className="mensagem">
                                <span>{men.mensagem}</span><br/>
                                <span>{men.hora}</span><br/>
                            </div> 
                        </div>

                    )
                }))
                }
            </div>
            <div className="chatFooter">
                <input 
                    type="text" 
                    name="message" 
                    id="message" 
                    placeholder="digite alguma mensagem" 
                    onChange={(event) => {setMessage(event.target.value)}}
                    onKeyPress={(event) => {
                        event.key === 'Enter' && mandarMensagem ()
                    }}/>
                <button onClick={mandarMensagem}>Enviar</button>
            </div>
        </div>
    )
}

export default Chat