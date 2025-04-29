import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import BookRoom from './pages/BookRoom';

function App() {
  return (
    <Router>  {/* Wrap your Routes in BrowserRouter */}
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/book/:roomId" element={<BookRoom />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
