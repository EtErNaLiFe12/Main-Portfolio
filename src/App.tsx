import './App.css';
import Router from './routes';
import SwiperCore, { Autoplay } from 'swiper';
import AnimatedCursor from 'components/AnimatedCursor';
import Footer from 'components/Footer';

function App() {
  SwiperCore.use([Autoplay]);

  return (
    <>
      <Router />
      <AnimatedCursor />
      <Footer />
    </>
  );
}

export default App;
