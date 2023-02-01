import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Playlist from './Pages/Playlist';
import { Search } from './Pages/Search';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route exact path='/' element={<Home/>}></Route>
              <Route path='/Playlist/:id' element={<Playlist/>}></Route>
              <Route path='/Search/:q' element={<Search />}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
