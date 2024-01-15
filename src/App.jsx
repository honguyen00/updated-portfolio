import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutPage from './pages/AboutPage'
import PortfolioPage from './pages/PortfolioPage'
import ContactPage from './pages/ContactPage'
import ResumePage from './pages/ResumePage'

function App() {
  return (
    <>
      <Header />
        <Routes>
        <Route path='/' element={<AboutPage />}></Route>
        <Route path='/portfolio' element={<PortfolioPage />}></Route>
        <Route path='/contact' element={<ContactPage />}></Route>
        <Route path='/resume' element={<ResumePage />}></Route>
        </Routes>
      <Footer />
    </>
  )
}

export default App
