// import logo from './logo.svg';
import './App.scss';
import Header from "./components/header/header"
import Menu from "./components/menu/Menu"
import Banner from "./components/banner/banner"
import Benefits from "./components/benefits/benefits"
import Brand from './components/brands/brand';
import Shelf from './components/shelf/shelf';
import InfoCard from './components/infoCard/infoCard';
import Newsletter from './components/newsletter/newsletter';
import Footer from './components/footer/footer';
import PopupNews from './components/popupNews/popupNews';

function App() {
  return (
    <div className="App">
      <PopupNews/>
      <Header/>
      <Menu/>
      <Banner/>
      <Benefits/>
      <Brand/>
      <Shelf/>
      <InfoCard/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
