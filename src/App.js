import {Route, Routes} from "react-router-dom"
import { NavBar, MainPage } from "./components"
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
