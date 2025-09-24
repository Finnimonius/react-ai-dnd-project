import { Routes, Route } from 'react-router-dom'
import './styles/App.css'
import AppLayout from './components/layout/AppLayout'
import Home from './pages/Home'
import CharacterCreator from './pages/CharacterCreator'
import Game from './pages/Game'


export default function App() {
  return (
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path='charactercreator' element={<CharacterCreator />} />
          <Route path='game' element={<Game />} />
        </Route>
      </Routes>
  )
}

