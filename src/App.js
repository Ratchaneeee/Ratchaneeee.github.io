import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Forif from './components/ForAndAxios/Forif';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Forif />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
