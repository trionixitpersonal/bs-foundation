import { Routes, Route } from 'react-router';
import Layout from './components/common/Layout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ServiceDetails from './pages/ServiceDetails';
import Stories from './pages/Stories';
import BlogDetails from './pages/BlogDetails';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Programs from './pages/Programs';
import ProgramDetails from './pages/ProgramDetails';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/program-details" element={<ProgramDetails />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service-details" element={<ServiceDetails />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        {/* Add more routes as needed */}
      </Routes>
    </Layout>
  );
}

export default App;
