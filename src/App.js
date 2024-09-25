import logo from './logo.svg';
import './App.css';
import'./components/Footer'
import Footer from './components/Footer';
import'./components/Footer'
import './styles/css/style.css';
import './styles/scss/style.scss';
import Banner from './components/Banner';

// Import Bootstrap and jQuery
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.min.js';   // Bootstrap JS
import 'jquery';                              // jQuery

function App() {
  return (
   <div>
    <Banner/>
 <Footer/>
    </div>
  );
}

export default App;
