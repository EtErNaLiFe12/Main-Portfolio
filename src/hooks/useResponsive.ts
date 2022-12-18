import { useMediaQuery } from '@mui/material';

export default function useResponsive() {

  const handleResponsiveWidth = (maxOrMin: string, maxWidth: number) => {
    const responsiveWidth = useMediaQuery(`(${maxOrMin}-width: ${maxWidth}px)`)
    return responsiveWidth;
  }

  const WIDTH401 = handleResponsiveWidth('max', 401);
  const WIDTH900 = handleResponsiveWidth('max', 900);
  
  return {WIDTH900, WIDTH401}
}
