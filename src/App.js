import {Route, Routes} from "react-router-dom"
import { NavBar, MainPage, Resume, Footer } from "./components"
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
