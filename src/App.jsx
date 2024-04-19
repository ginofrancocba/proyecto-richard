

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar'
import Home from './Home';
import Numerologie from './numerologie';
import Tarot from './Tarot';
import Formations from './Formations';
import Seances from './Seances';
import Surmoi from './Surmoi';
import Blog from './Blog';
import Boutique from './Boutique';

import './index.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Numerologie" element={<Numerologie />} />
          <Route path="/Tarot" element={<Tarot />} />
          <Route path="/Formations" element={<Formations />} />
          <Route path="/seances" element={<Seances />} />
          <Route path="/surmoi" element={<Surmoi />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/boutique" element={<Boutique />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
