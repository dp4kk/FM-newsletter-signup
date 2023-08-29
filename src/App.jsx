
import Homepage from "./Pages/Homepage"
import ConfirmationPage from "./Pages/ConfirmationPage"
import {Route,Routes,BrowserRouter } from 'react-router-dom'
function App() {


  return (
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/confirm" element={<ConfirmationPage/>}/>
      </Routes>
      </BrowserRouter>
  )
}

export default App
