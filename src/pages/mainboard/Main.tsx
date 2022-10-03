import { Box, Typography } from '@mui/material';
import { map } from 'lodash';
import { useNavigate } from 'react-router';
import { PATH } from 'routes/path';

const mainMenu = [
  {
    menu: 'Portfolio',
  },
  {
    menu: 'Picture'
  },
  {
    menu: 'Introductions'
  },
  {
    menu: 'sns'
  },
];

export default function Main() {
  const navigate = useNavigate();


  // functions
  function handleNavigate(menu: string) {
    switch (menu) {
      case 'Portfolio':
        return navigate(PATH.main);
      case 'Picture':
        return navigate(PATH.main);
      case 'Introductions':
        return navigate(PATH.main);
      case 'sns':
        return navigate(PATH.main);
    }
  }

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ mt: 3, textAlign: 'left', color: '#000', flex: 1, cursor: 'pointer' }}>
          <Typography sx={{ fontSize: '20px', fontWeight: 700, color: '#fb5849' }}>Main Portfolio</Typography>
        </Box>
        <Box sx={{ display: 'flex', flex: 2, justifyContent: 'right' }}>
          {map(mainMenu, (side, idx) => {
            return (
              <Box key={idx} sx={{
                mt: 3.5, ml: 1.5, cursor: 'pointer'
              }} onClick={() => {
                handleNavigate(side.menu);
              }}>
                <Typography sx={{
                  fontSize: '20px', fontWeight: 700,
                  '&:hover': {
                    fontSize: '25px',
                    color: '#fb5849',
                    transition: '.5s'
                  }
                }}>{side.menu}</Typography>
              </Box>
            )
          })}
        </Box>
      </Box>
    </>
  );
}

