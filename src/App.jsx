import './App.css'
import Home from './components/Home'
import Create from './components/Create'
import Update from './components/Update'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
    return(
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/create' element={<Create></Create>}></Route>
          <Route path='/edit/:id' element={<Update></Update>}></Route>
        </Routes>
      </BrowserRouter>
    )
}

export default App
