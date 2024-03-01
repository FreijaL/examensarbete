import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/HomePage';
import SpellsPage from './pages/SpellsPage';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/spells" element={<SpellsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
