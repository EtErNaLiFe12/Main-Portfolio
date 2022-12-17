import { Box, BoxProps, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import useResponsive from 'hooks/useResponsive';
import { map } from 'lodash';
import { Fragment } from 'react';

const mainMenu = [
  {
    menu: 'INTRODUCTION',
  },
  {
    menu: 'PORTFOLIO',
  },
  {
    menu: 'SIDE-PROJECT',
  },
];

interface HeaderProps {
  sx: BoxProps;
  setActiveTab: (activeTab: string) => void;
}
export default function Header(props: HeaderProps) {
  const { sx, setActiveTab } = props;
  const WIDTH900 = useResponsive('max', 900);

  return (
    <Fragment>
      <Box
        sx={{
          display: 'flex',
          color: '#000',
          justifyContent: 'space-between',
          alignItems: 'center',
          ...sx,
        }}
      >
        <motion.div
          animate={{
            x: [0, 50, 20, 0],
            y: [0, 50, 20, 0],
            scale: [1, 2, 1],
            rotate: [0, 20, 10, 30, 0],
            // borderRadius: ['10%', '50%', '70%', '50%', '10%'],
          }}
          transition={{
            duration: 3,
            ease: 'easeInOut',
            times: [0, 1, 1, 1, 0.5, 0.5],
            repeat: 0,
            // repeatDelay: 1,
          }}
          style={{
            color: '#fb5849',
          }}
        >
          <Typography variant="h6" sx={{ color: '#fff', cursor: 'pointer' }}>
            JB DEVELOP WEB
          </Typography>
        </motion.div>

        <Box sx={{ display: 'flex', justifyContent: 'right' }}>
          {map(mainMenu, (side, idx) => {
            return (
              <Box
                key={idx}
                sx={{
                  ml: 1.5,
                }}
                onClick={() => {
                  setActiveTab(side.menu);
                }}
              >
                <Typography
                  sx={{
                    fontSize: WIDTH900 ? '12px' : '18px',
                    fontWeight: 700,
                    color: '#fff',
                    '&:hover': {
                      color: '#999',
                      transition: '.5s',
                    },
                    // cursor: 'pointer',
                  }}
                >
                  {side.menu}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Fragment>
  );
}
