import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Dashboard from './components/dashboard/Dashboard';
import Catalog from './components/catalog/Catalog';
import Contacts from './components/contacts/Contacts';
// import Item from './components/item/Item';
import Basket from './components/basket/Basket';
import { useState } from 'react';

import { data } from './data';

const App = () => {
  const [products, setProducts] = useState(data);
  
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/catalog' element={<Catalog products={products} setProducts={setProducts} />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/basket' element={<Basket />} />
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
