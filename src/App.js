import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Main from './portifolio/Main'
import Loja from './loja/Loja'
import LoginChat from './chat/LoginChat'
import Site from './site/Site'
import CadCon from './loja/CadCon';
import Login from './loja/Login';
import Cadastro from './loja/Cadastro'
import io from 'socket.io-client'
import ChatCadastro from './chat/ChatCadastro';

const socket = io.connect('http://192.168.1.106:8080')

function App() {
  return (
  <Router>
    <Routes>
      <Route path='/' element={<Main></Main>}></Route>
      <Route path='/game' element={<Site></Site>}></Route>
      <Route path='/chat' element={<LoginChat socket={socket}></LoginChat>}></Route>
      <Route path='/cadchat' element={<ChatCadastro socket={socket}></ChatCadastro>}></Route>
      <Route path='/loja' element={<Loja></Loja>}></Route>
      <Route path='/cadCon' element={<CadCon></CadCon>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/cadastro' element={<Cadastro></Cadastro>}></Route>
    </Routes>
  </Router>
    
  );
}

export default App;
