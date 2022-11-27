import { Box } from '@mui/material';
import { LOTTIE_NAME } from 'consts';
import useLottie from 'hooks/useLottie';
import Lottie from 'react-lottie';

export default function LoadingScreen() {
  const { configLottieFile } = useLottie();
  return (
    <Box
      sx={{
        zIndex: 9999,
        height: 500,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Lottie options={configLottieFile(LOTTIE_NAME.DEFAULT)} height={200} width={200} />
    </Box>
  );
}
