import './App.css';
import PeliProvider from './context/PeliContext';
import FilterMovies from './components/FilterMovies/FilterMovies';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {


  return (
<BrowserRouter>
    <PeliProvider>
    <Routes>

    <Route path='/' element={<FilterMovies/>}/>
    <Route path='/item/:id' element={<ItemDetailContainer/>}/>
    
    </Routes>
    </PeliProvider>
</BrowserRouter>
  );
}

export default App;
