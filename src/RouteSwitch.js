import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from './ScrollToTop';

const RouteSwitch = () => {
  return (
    <AnimatePresence>
      <BrowserRouter basename='/'>
        <ScrollToTop>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Shop' element={<Shop />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </AnimatePresence>
  );
};

export default RouteSwitch;
