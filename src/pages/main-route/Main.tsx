import React, { useEffect } from 'react';
import { Box } from '@mui/material';

export default function Main() {
  useEffect(() => {
    alert('test');
  }, []);
  return <Box>Hello React!</Box>;
}
