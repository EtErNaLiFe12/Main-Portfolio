import { Box, Stack, Typography } from '@mui/material';
function Footer() {
  return (
    <Stack
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      sx={{ backgroundColor: '#555', width: '100%', height: 60 }}
    >
      <Typography variant="h6" color="#fff" sx={{ fontSize: 14 }}>
        😀 ⚪️ Name: Jun Beom Park / Phone: 010-3143-4666 / Address: Shingil-dong 65-55
        204ho ⚪️
      </Typography>
    </Stack>
  );
}

export default Footer;
