import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Shop' element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
