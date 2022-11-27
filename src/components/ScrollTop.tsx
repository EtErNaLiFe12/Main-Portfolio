import { Box, BoxProps, Typography } from '@mui/material';
import { LOTTIE_NAME } from 'consts';
import useLottie from 'hooks/useLottie';
import Lottie from 'react-lottie';

export default function ScrollTop(props?: BoxProps) {
  const { configLottieFile } = useLottie();

  return (
    <Box
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }}
      sx={{
        position: 'fixed',
        right: 20,
        bottom: 20,
        cursor: 'pointer',
      }}
    >
      <Lottie options={configLottieFile(LOTTIE_NAME.SCROLL_TOP)} height={70} width={70} />
    </Box>
  );
}
