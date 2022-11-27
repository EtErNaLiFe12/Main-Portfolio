import { useEffect, useRef, useState } from 'react';
import { Box, Divider, Stack, Typography } from '@mui/material';
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
import { map } from 'lodash';

const techList = ['html', 'css', 'Javascript', 'Typescript', 'React', 'React-Native', 'NextJs'];
const coworkingList = ['Github', 'Fork', 'Slack', 'Figma', 'Zeplin', 'Notion'];
const expList = [
  {
    companyName: 'YoungSan-Techno',
    workDate: '2011.10 ~ 2017.07',
  },
  {
    companyName: 'M&S-Korea',
    workDate: '2018.04 ~ 2020.07',
  },
  {
    companyName: '미식의시대',
    workDate: '2021.08 ~ 2022.02',
  },
  {
    companyName: 'Gitple',
    workDate: '2022.02 ~',
  },
];
export default function Main() {
  const { configLottieFile } = useLottie();
  const [activeTab, setActiveTab] = useState<string>('');
  const [activeScrollTop, setActiveScrollTop] = useState<boolean>(false);
  const portfolioRef = useRef<HTMLDivElement | null>(null);
  const pictureRef = useRef<HTMLDivElement | null>(null);
  const introductionRef = useRef<HTMLDivElement | null>(null);

  const handleRef = (ref: string) => {
    switch (ref) {
      case 'PORTFOLIO':
        return portfolioRef;
      case 'PICTURE':
        return pictureRef;
      case 'INTRODUCTION':
        return introductionRef;
    }
  };

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

  return (
    <>
      {/* Header section */}
      <Box
        sx={{
          pt: 2,
          px: 5,
          height: '100vh',
          backgroundImage: `url(${IMAGE_URL.MAIN_BG})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Header sx={{ mb: 10 }} setActiveTab={setActiveTab} />
        <Box width={700}>
          <Typography variant="h4" sx={{ fontWeight: 700, color: '#fff' }}>
            Welcome to My FE Develop Website
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 700, color: '#fff' }}>
            - Made by developer JB -
          </Typography>
        </Box>
        <MovementAnimation />
      </Box>

      {/* body section */}
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
          <Typography variant="h3" textAlign={'center'} color="#fff" sx={{ fontWeight: 700 }}>
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
          <Lottie options={configLottieFile(LOTTIE_NAME.CYCLE_RIDER)} height={200} width={200} />
        </Box>
      </Box>

      <Divider
        sx={{
          height: 10,
          backgroundColor: '#333',
          opacity: '50%',
        }}
      />
      {/* Introduction Part */}
      <Box
        ref={introductionRef}
        sx={{
          display: 'flex',
          backgroundColor: 'rgba(0,0,0, 0.7)',
          width: '100%',
          height: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h5" textAlign={'center'} color="#fff" sx={{ fontWeight: 700 }}>
          INTRODUCTIONS
        </Typography>
      </Box>
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'top',
          m: 2.5,
        }}
      >
        <Box
          sx={{
            flex: 1,
            height: '100%',
            border: 15,
            borderColor: '#777',
            boxSizing: 'border-box',
            borderRadius: 5,
            p: 2,
            mr: 2.5,
          }}
        >
          <Typography variant="h5" color="#777" textAlign="center" sx={{ fontWeight: 700 }}>
            Developement Skills
          </Typography>
          <Box sx={{ mt: 4 }}>
            {map(techList, (list, idx) => (
              <Box component={'ul'} key={idx} sx={{ mb: 3 }}>
                <Typography variant="h6" color="#777" component={'li'}>
                  {list}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            height: '100%',
            border: 15,
            borderColor: '#777',
            boxSizing: 'border-box',
            borderRadius: 5,
            p: 2,
            mr: 2.5,
          }}
        >
          <Typography variant="h5" color="#777" textAlign="center" sx={{ fontWeight: 700 }}>
            Co-working tools
          </Typography>
          <Box sx={{ mt: 4 }}>
            {map(coworkingList, (list, idx) => (
              <Box component={'ul'} key={idx} sx={{ mb: 3 }}>
                <Typography variant="h6" color="#777" component={'li'} key={idx}>
                  {list}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            flex: 2,
            height: '100%',
            border: 15,
            borderColor: '#777',
            boxSizing: 'border-box',
            borderRadius: 5,
            p: 2,
          }}
        >
          <Typography variant="h5" color="#777" textAlign="center" sx={{ fontWeight: 700 }}>
            My Experience
          </Typography>
          <Box sx={{ mt: 4 }}>
            {map(expList, (list, idx) => (
              <Box component={'ul'} key={idx} sx={{ mb: 3 }}>
                <Typography variant="h6" color="#777" component={'li'}>
                  {list.companyName} : {list.workDate}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* <GithubIcon /> */}
      </Box>
      <Box
        sx={{
          height: 300,
          border: 15,
          borderColor: '#777',
          boxSizing: 'border-box',
          borderRadius: 5,
          m: 3,
        }}
      >
        <Typography>ggg</Typography>
      </Box>

      {/* Portfolio Part */}
      <Box
        ref={portfolioRef}
        sx={{
          display: 'flex',
          backgroundColor: 'rgba(0,0,0, 0.7)',
          width: '100%',
          height: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h5" textAlign={'center'} color="#fff" sx={{ fontWeight: 700 }}>
          PORTFOLIO
        </Typography>
      </Box>
      <Box sx={{ height: 600 }}>
        <Portfolio />
      </Box>

      {/* Picture part */}
      <Box
        ref={pictureRef}
        sx={{
          display: 'flex',
          backgroundColor: 'rgba(0,0,0, 0.7)',
          width: '100%',
          height: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h5" textAlign={'center'} color="#fff" sx={{ fontWeight: 700 }}>
          PICTURE
        </Typography>
      </Box>
      <Box sx={{ height: 600 }}></Box>
      {activeScrollTop && <ScrollTop />}
    </>
  );
}
