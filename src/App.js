import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header.js"
import Highlights from "./components/Highlights.js"
import Footer from "./components/Footer.js"
import Standings from "./components/Standings.js"
import Signin from "./components/Signin.js"
import SearchBar from "./components/Searchbar.js"
import './App.css';

function App() {
  return (
    <Router basename='/shaastra'>
      <div className='relative'>
        <Header className='absolute z-10' />
        <SearchBar />
        <Routes>
          <Route path="/" element={<Highlights />} />
          <Route path="/standings" element={<Standings />} />
          <Route path="/signup" element={<Signin />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;