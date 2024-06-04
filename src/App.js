import logo from './logo.svg';
import './App.css';
import Portfolio from './portfolio';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Project from './project';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Project />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  </Router>
  );
}

export default App;
