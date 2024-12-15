import React from 'react';
import AppRoutes from './routes/AppRoutes';
import './assets/styles/variables.css'; // Import CSS variables
import './assets/styles/global.css'; // Import global styles

const App = () => {
  return (
    <div className="app-container">
      <AppRoutes />
    </div>
  );
};

export default App;
