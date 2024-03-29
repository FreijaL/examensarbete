import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/HomePage';
import SpellsPage from './pages/SpellsPage';
import CharactersPage from './pages/CharactersPage';
import CharacterInfoPage from './pages/CharacterInfoPage';
import SortingHatPage from './pages/SortingHatPage';
import PhotoGallery from './pages/PhotoGallery';
import HouseInformationPage from './pages/HouseInformationPage';
import SpecificHouseInfoPage from './pages/SpecificHouseInfoPage';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/spells" element={<SpellsPage />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/characters/info/:id" element={<CharacterInfoPage />} />
        <Route path="/sortinghat" element={<SortingHatPage />} />
        <Route path="/photogallery" element={<PhotoGallery />} />
        <Route path="/houseinformation" element={<HouseInformationPage />} />
        <Route path="/houseinformation/:id" element={<SpecificHouseInfoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
