import React from 'react';
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import './App.css'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage/>} />
        <Route path="/second-page" element={<SecondPage/>}/>
      </Routes>
    </Router>
  );
};

export default App;
