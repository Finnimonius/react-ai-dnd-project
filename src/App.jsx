import { Routes, Route } from 'react-router-dom'
import './styles/App.css'
import AppLayout from './components/layout/AppLayout'
import Home from './pages/Home'
import CharacterCreator from './pages/CharacterCreator'
import Game from './pages/Game'
import Rules from './pages/Rules'
import NotFoundPage from './pages/Notfoundpage'


export default function App() {
  return (
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path='rules' element={<Rules />} />
          <Route path='charactercreator' element={<CharacterCreator />} />

          <Route path='play' element={<Game />} />
          <Route path="/play/:step" element={<Game />} />

          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
  )
}

