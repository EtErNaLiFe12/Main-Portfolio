import { Box, Typography } from '@mui/material';

function LoadingScreen() {
  return <Box sx={{ zIndex: 9999, textAlign: 'center' }}>
    <Typography sx={{ fontSize: 40 }}>Loading</Typography>
  </Box>
}

export default LoadingScreen;