import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/HomePage';
import SpellsPage from './pages/SpellsPage';
import CharactersPage from './pages/CharactersPage';
import PhotoGallery from './pages/PhotoGallery';
import SortingHatPage from './pages/SortingHatPage';
import HouseInformationPage from './pages/HouseInformationPage';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/spells" element={<SpellsPage />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/sortinghat" element={<SortingHatPage />} />
        <Route path="/photogallery" element={<PhotoGallery />} />
        <Route path="/houseinformation" element={<HouseInformationPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
