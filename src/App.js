import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Main from './portifolio/Main'
import Loja from './loja/Loja'
import Blog from './blog/Blog'
import Site from './site/Site'
import CadCon from './loja/CadCon';
import Login from './loja/Login';
import Cadastro from './loja/Cadastro'


function App() {
  return (
  <Router>
    <Routes>
      <Route path='/' element={<Main></Main>}></Route>
      <Route path='/game' element={<Site></Site>}></Route>
      <Route path='/blog' element={<Blog></Blog>}></Route>
      <Route path='/loja' element={<Loja></Loja>}></Route>
      <Route path='/cadCon' element={<CadCon></CadCon>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/cadastro' element={<Cadastro></Cadastro>}></Route>
    </Routes>
  </Router>
    
  );
}

export default App;
