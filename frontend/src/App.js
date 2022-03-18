import './App.css';
import LandingPage from './components/landing_page';
import {Route, Routes} from 'react-router-dom';
import HomePage from './components/home_page';
import ConnectPage from './components/connect_page';
import CreatePage from './components/create_page';

function App() {
  return (
    <Routes> 
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/connect-wallet" element={<ConnectPage />} />
      <Route path="/asset/create" element={<CreatePage />} />
    </Routes>
  );
}

export default App;
