import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
// import AboutPage from './pages/AboutPage'
// import PortfolioPage from './pages/PortfolioPage'
// import ContactPage from './pages/ContactPage'
// import ResumePage from './pages/ResumePage'

function App() {
  return (
    <>
      <Header />
        <Outlet />
      <Footer />
    </>
  )
}

export default App
