import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Dashboard from './components/dashboard/Dashboard';
import Catalog from './components/catalog/Catalog';
import Contacts from './components/contacts/Contacts';
import Item from './components/item/Item';

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
