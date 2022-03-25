import './App.css';
import './cityCards.css';
import ImageList from './components/ImageList';
import MainHeading from './components/MainHeading';
import Subtitle from './components/Subtitle';
import MainText from './components/MainText';
import CityCards from './components/CityCards';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <MainHeading />
        <Subtitle />
        <MainText />
        <ImageList />
      </div>
      <CityCards />
    </div>
  );
}

export default App;
