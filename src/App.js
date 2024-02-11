import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './App.css';
import Home from './pages/Home';
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const App = () => {

  const klik = "Klik Jika Anda Ingin Ke Halaman About"

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<NotFound/>} />

      </Routes>
    </Router>
  );
}

export default App;
