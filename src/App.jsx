import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MenuBar from './MenuBar';
import Footer from './Footer';
import Home from './Home';
import AboutUs from './AboutUs';
import Contact from './Contact';

function App() {
  return (
    <BrowserRouter>
      <MenuBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/sobre-nos" element={<AboutUs />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
