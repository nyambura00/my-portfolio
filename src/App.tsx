import './App.css';
import Layout from './components/Layout';
import Contact from './components/Contact';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
