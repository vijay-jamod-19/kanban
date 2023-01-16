import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
import HomePage from './Pages/Home/HomePage';
import LoginPage from './Pages/Auth/LoginPage';
import SignupPage from './Pages/Auth/SignupPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          {/* if rest of this routes  */}
          <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
