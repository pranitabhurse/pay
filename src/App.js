import logo from './logo.svg';
import './App.css';
import Home from './Screens/Front/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import Dashboard from './Screens/Dashboard/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
