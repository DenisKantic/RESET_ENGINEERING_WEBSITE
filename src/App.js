import Navigation from './components/Navigation.jsx'
import HomePage from './components/HomePage.jsx';
import AboutUs from './components/AboutUs.jsx';
import Products from './components/Products.jsx'
import OtherServices from './components/OtherServices.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
    <Navigation/>
    <HomePage/>
    <AboutUs/>
    <Products/>
    <OtherServices/>
    <Contact/>
    <Footer />
    </>
  );
}

export default App;
