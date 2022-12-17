import { useMediaQuery } from '@mui/material';

export default function useResponsive(maxOrMin: string, maxWidth: number) {
  const responsiveWidth = useMediaQuery(`(${maxOrMin}-width: ${maxWidth}px)`)
  return responsiveWidth
}
