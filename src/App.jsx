import { Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/layout/ScrollToTop.jsx'
import SiteHeader from './components/layout/SiteHeader.jsx'
import SiteFooter from './components/layout/SiteFooter.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Board from './pages/Board.jsx'
import Events from './pages/Events.jsx'
import Join from './pages/Join.jsx'

function App() {
  return (
    <>
      <ScrollToTop />
      <SiteHeader />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/board" element={<Board />} />
          <Route path="/events" element={<Events />} />
          <Route path="/join" element={<Join />} />
        </Routes>
      </main>
      <SiteFooter />
    </>
  )
}

export default App
