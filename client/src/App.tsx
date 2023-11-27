import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';

function App() {
  return (
    <Router>
      <div className="App">
        <>
          <Routes>
            <Route path="*" element={<ErrorPage />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </>
      </div>
    </Router>
  );
}

export default App;
