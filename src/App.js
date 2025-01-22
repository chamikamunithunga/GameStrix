import React from 'react';
import { GlobalStyles } from './styles/globalStyles';
import Navbar from './components/navbar';
import HomePage from './pages/HomePage';
import Footer from './components/footer'; // Import the Footer component

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <GlobalStyles />
      <Navbar />
      <HomePage />
      <Footer /> {/* Add the Footer */}
    </div>
  );
}

export default App;
