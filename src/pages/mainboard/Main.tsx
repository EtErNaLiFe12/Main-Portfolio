import { useEffect, useRef, useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Divider,
  Link,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import Header from 'components/Header';
import PaintBoard from 'components/PaintBoard';
import { IMAGE_URL, LOTTIE_NAME } from 'consts';
import { motion } from 'framer-motion';
import Portfolio from './Portfolio';
import Lottie from 'react-lottie';
import useLottie from 'hooks/useLottie';
import GithubIcon from 'assets/icon/githubIcon';
import SlackIcon from 'assets/icon/slackIcon';
import FigmaIcon from 'assets/icon/figmaIcon';
import ScrollTop from 'components/ScrollTop';
import MovementAnimation from 'components/MovementAnimation';
import Carousel from 'components/Carousel';
import Introduction from './details/Introduction';
import CommonDialog from 'components/CommonDialog';
import { forEach, map } from 'lodash';
import { setCounter } from 'redux/slices/main';
import { useSelector } from 'redux/store/store';
import useResponsive from 'hooks/useResponsive';

export default function Main() {
  const { configLottieFile } = useLottie();
  const WIDTH900 = useResponsive('max', 900);
  const { value } = useSelector((state) => ({
    value: state.main.value,
  }));
  const [activeTab, setActiveTab] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);
  const [activeScrollTop, setActiveScrollTop] = useState<boolean>(false);
  const portfolioRef = useRef<HTMLDivElement | null>(null);
  const sideProjectRef = useRef<HTMLDivElement | null>(null);
  const introductionRef = useRef<HTMLDivElement | null>(null);

  const handleRef = (ref: string) => {
    switch (ref) {
      case 'PORTFOLIO':
        return portfolioRef;
      case 'SIDE-PROJECT':
        return sideProjectRef;
      case 'INTRODUCTION':
        return introductionRef;
    }
  };

  // const calculateNum = () => {
  //   const numArr = [{ subject: 0 }, { subject: 66.5 }, { subject: 33.4 }, { subject: 0 }];
  //   const subject = map(numArr, (num) => num.subject);
  //   const initialValue = 0;
  //   const sumWithInitial = subject.reduce(
  //     (accumulator, currentValue) => accumulator + currentValue,
  //     initialValue,
  //   );

  //   const greatestNum = Math.max.apply(null, subject);

  //   if (sumWithInitial < 100) {
  //     forEach(numArr, (arr) => {
  //       if (arr.subject === greatestNum) {
  //         arr.subject = greatestNum + 100 - sumWithInitial;
  //       }
  //     });
  //   }

  //   return numArr;
  // };

  useEffect(() => {
    window.scrollTo({
      top: handleRef(activeTab)?.current?.offsetTop,
      behavior: 'smooth',
    });

    const resetActiveTab = setTimeout(() => {
      setActiveTab('');
    }, 1000);

    return () => {
      clearTimeout(resetActiveTab);
    };
  }, [activeTab, window.scrollY]);

  const handleScroll = () => {
    const yScrollPos = window.scrollY;
    if (yScrollPos > 0) {
      setActiveScrollTop(true);
    } else {
      setActiveScrollTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeTab]);

  // useEffect(() => {
  //   calculateNum();
  // }, []);

  return (
    <>
      {/* Header section  */}
      <Box
        sx={{
          pt: 2,
          px: WIDTH900 ? 3 : 5,
          height: '100vh',
          backgroundImage: `url(${IMAGE_URL.MAIN_BG})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Header sx={{ mb: 10 }} setActiveTab={setActiveTab} />
        <Box width={WIDTH900 ? 400 : 700}>
          <Typography
            variant={WIDTH900 ? 'h6' : 'h4'}
            sx={{ fontWeight: 700, color: '#fff', mb: 1 }}
          >
            Welcome to My FE Develop Website
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 700, color: '#fff' }}>
            {' '}
            - Made by developer JB -
          </Typography>
        </Box>
        {!WIDTH900 && <MovementAnimation />}
      </Box>

      {/* ---------------------------------------------------------------- */}
      {/* Body section */}
      <Divider
        sx={{
          height: 10,
          backgroundColor: '#333',
          opacity: '50%',
        }}
      />
      <Box
        ref={portfolioRef}
        sx={{
          display: 'flex',
          backgroundColor: '#222',
          width: '100%',
          height: 400,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box>
          <Typography
            variant="h3"
            textAlign={'center'}
            color="#fff"
            sx={{ fontWeight: 700 }}
          >
            FE Developer
          </Typography>
          <Typography
            variant="h5"
            textAlign={'center'}
            color="#fff"
            sx={{ fontWeight: 700, mt: 5 }}
          >
            Jun Beom Park
          </Typography>
          <Lottie
            options={configLottieFile(LOTTIE_NAME.CYCLE_RIDER)}
            height={200}
            width={200}
          />
        </Box>
      </Box>

      <Divider
        sx={{
          height: 10,
          backgroundColor: '#333',
          opacity: '50%',
        }}
      />

      {/* ---------------------------------------------------------------- */}
      {/* Introduction Part */}
      {/* <Box
        ref={introductionRef}
        sx={{
          display: 'flex',
          backgroundColor: 'rgba(0,0,0, 0.7)',
          width: '100%',
          height: 100,
          justifyContent: 'center',
          alignItems: 'center',
          animation: 'line-animation 1s infinite alternate',
          '@keyframes line-animation': {
            '0%': {
              backgroundColor: '#333',
            },
            '100%': {
              backgroundColor: '#777',
            },
          },
        }}
      >
        <Typography
          variant="h5"
          textAlign={'center'}
          color="#fff"
          sx={{ fontWeight: 700 }}
        >
          INTRODUCTIONS
        </Typography>
      </Box>
      <Introduction /> */}

      {/* ---------------------------------------------------------------- */}
      {/* Portfolio Part */}
      {/* <Box
        ref={portfolioRef}
        sx={{
          display: 'flex',
          backgroundColor: 'rgba(0,0,0, 0.7)',
          width: '100%',
          height: 100,
          justifyContent: 'center',
          alignItems: 'center',
          animation: 'line-animation 1s infinite alternate',
          '@keyframes line-animation': {
            '0%': {
              backgroundColor: '#333',
            },
            '100%': {
              backgroundColor: '#777',
            },
          },
        }}
      >
        <Typography
          variant="h5"
          textAlign={'center'}
          color="#fff"
          sx={{ fontWeight: 700 }}
        >
          PORTFOLIO
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 600,
          mx: 15,
          my: 5,
        }}
      >
        <Carousel />
      </Box> */}

      {/* ---------------------------------------------------------------- */}
      {/* Side-project part */}
      <Box
        ref={sideProjectRef}
        sx={{
          display: 'flex',
          backgroundColor: 'rgba(0,0,0, 0.7)',
          width: '100%',
          height: 100,
          justifyContent: 'center',
          alignItems: 'center',
          animation: 'line-animation 1s infinite alternate',
          '@keyframes line-animation': {
            '0%': {
              backgroundColor: '#333',
            },
            '100%': {
              backgroundColor: '#777',
            },
          },
        }}
      >
        <Typography
          variant="h5"
          textAlign={'center'}
          color="#fff"
          sx={{ fontWeight: 700 }}
        >
          SIDE PROJECT
        </Typography>
      </Box>
      <Button
        onClick={() => setOpen(true)}
        sx={{ width: 150, height: 50, border: 2, mt: 1, ml: 1 }}
      >
        Test Popup
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        {/* <DialogTitle>{"Use Google's location service?"}</DialogTitle> */}
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending anonymous location
            data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Disagree</Button>
          <Button onClick={() => setOpen(false)}>Agree</Button>
        </DialogActions>
      </Dialog>
      {/* <CommonDialog setOpen={setOpen} open={open} /> */}
      <Box sx={{ height: 600 }}></Box>
      {activeScrollTop && <ScrollTop />}
    </>
  );
}
