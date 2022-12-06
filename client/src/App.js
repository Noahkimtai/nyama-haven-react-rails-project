import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login'
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import SignUP from './Components/SignUp';

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path='/login' element ={<Login/>}> </Route>
        <Route path='/signUP' element ={<SignUP/>}> </Route>
        <Route exact path= '/home' element= {<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
