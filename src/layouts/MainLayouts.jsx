import React from 'react';
import Header from '../components/Header'; 
// import Footer from '../components/Footer'; // Import the Footer component

const MainLayout = ({ children }) => {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Main content */}
      <main style={styles.main}>
        {children}
      </main>

      {/* Footer */}
      {/* <Footer /> */}
    </>
  );
};

const styles = {
  main: {
    padding: '20px', // Example padding, adjust as needed
    minHeight: 'calc(100vh - 100px)', // Ensures the main content fills the viewport
    backgroundColor: 'var(--background-color)', // Use your CSS variable
  },
};

export default MainLayout;
