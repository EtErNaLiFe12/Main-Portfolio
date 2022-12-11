import './App.css';
import Router from './routes';
import SwiperCore, { Autoplay } from 'swiper';
import AnimatedCursor from 'components/AnimatedCursor';

function App() {
  SwiperCore.use([Autoplay]);

  return (
    <>
      <Router />
      <AnimatedCursor />
    </>
  );
}

export default App;
