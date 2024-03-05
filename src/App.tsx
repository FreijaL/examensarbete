import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/HomePage';
import SpellsPage from './pages/SpellsPage';
import CharactersPage from './pages/CharactersPage';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/spells" element={<SpellsPage />} />
        <Route path="/characters" element={<CharactersPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
