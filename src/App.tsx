import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { ThemeDetail } from './pages/ThemeDetail'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/theme/:id" element={<ThemeDetail />} />
      </Routes>
    </Layout>
  )
}

export default App
