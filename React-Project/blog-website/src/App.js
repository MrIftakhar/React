import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About'
import Blog from './Blog';
import Contact from './Contact';
import Error from './Error'
function App() {
  return (
    <>
    

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}> </Route>
      <Route path='/about' element={<About/>}> </Route>
      <Route path='/blog' element={<Blog/>}> </Route>
      <Route path='/Contact' element={<Contact/>}> </Route>
      <Route path='*' element={<Error/>}> </Route>
    </Routes>
    </BrowserRouter>

    
    </>
  );
}

export default App;
