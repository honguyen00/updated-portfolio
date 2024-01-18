import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
// personal css file
import './main.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import PortfolioPage from './pages/PortfolioPage.jsx'
import ResumePage from './pages/ResumePage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <AboutPage />
      },
      {
        path: 'contact',
        element: <ContactPage />
      },
      {
        path: 'portfolio',
        element: <PortfolioPage />
      },
      {
        path: 'resume',
        element: <ResumePage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
