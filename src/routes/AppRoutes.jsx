import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import pages
import Home from '../pages/Home';
// import About from '../pages/About';
// import Contact from '../pages/Contact';
// import Services from '../pages/Services/Index'; // Services overview
// import WebDevelopment from '../pages/Services/WebDevelopment';
// import DigitalMarketing from '../pages/Services/DigitalMarketing';
// import SEO from '../pages/Services/SEO';
// import Blog from '../pages/Blog/Index'; // Blog listing page
// import BlogDetails from '../pages/Blog/BlogDetails';
// import NotFound from '../pages/NotFound';

// Define routes
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />
        
        {/* About */}
        {/* <Route path="/about" element={<About />} /> */}
        
        {/* Services */}
        {/* <Route path="/services" element={<Services />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/services/seo" element={<SEO />} /> */}
        
        {/* Blog */}
        {/* <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} /> */}
        
        {/* Contact */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        
        {/* Redirects and 404 */}
        {/* <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
