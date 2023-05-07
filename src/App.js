import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Component/Navbar';
import TVShows from './Home';
import Aboutus from "./Aboutus";
import Shows from "./Component/Shows";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<TVShows/>}/>
        <Route path="/about" element={<Aboutus/>}/>
        <Route path="/show/:id" element={<Shows/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
