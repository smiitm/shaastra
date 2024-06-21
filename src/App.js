
import Header from "./components/Header.js"
import Highlights from "./components/Highlights.js"
import Footer from "./components/Footer.js"
import Standings from "./components/Standings.js"
import './App.css';

function App() {
  return (
    < div className='relative'>
      <Header className='absolute z-10' />
      <Highlights />
      <Standings />
      <Footer />
    </div>
    
  );
}


export default App;