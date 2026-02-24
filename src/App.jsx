
import './App.css'
import Header from './widgets/header/header'
import Footer from './widgets/footer/footer'
import MainPage from './pages/MainPage/MainPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ServicePage from './pages/ServicePage/ServicePage'


function App() {
  return (  
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/service' element={<ServicePage />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
