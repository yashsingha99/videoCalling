import './App.css'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/Home/index'
import Room from './pages/Room/Room'

function App() {
  return (
   <>
     <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/room/:roomId' element={<Room/>} />

     </Routes>
   </>
  )
}

export default App
