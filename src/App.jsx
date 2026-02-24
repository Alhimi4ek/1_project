
import './App.css'
import Header from './widgets/header/header'
import Footer from './widgets/footer/footer'
import MainPage from './pages/MainPage/MainPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ServicePage from './pages/ServicePage/ServicePage'
import Projects from './pages/Projects/Projects'
import Reviews from './pages/Reviews/Reviews'
import NotFound from './pages/NotFound/NotFound'


function App() {
  return (  
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/service' element={<ServicePage />} />
      <Route path='/projects' element={<Projects />} />  
      <Route path='/reviews' element={<Reviews />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
