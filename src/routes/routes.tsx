import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from '../pages'
import { Layout } from '../components'

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  )
}
