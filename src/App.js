import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import Footer from './components/Footer';
import Footerlogo from './components/Footerlogo';


function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <img className='links' src={require('./links.png')}/>
      <Footer/>
      <Footerlogo/>
    </div>
  );
}

export default App;
