import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from '../pages'
import { Layout } from '../components'
import { Pokemon } from '../pages/Pokemon/Pokemon'
import { Favorites } from '../pages/Favorites/Favorites'

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:id" element={<Pokemon />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </Router>
  )
}
