import { Box, Grid, Paper, styled } from '@mui/material';

export default function Portfolio() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(15),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ':hover': { fontSize: '20px', transition: '1s' },
  }));

  return (
    <Box sx={{ mt: 5, px: 5 }}>
      <Grid container spacing={2} columns={24}>
        <Grid item xs={6}>
          <Box onClick={() => console.log('test')}>
            <Item>GitHub</Item>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
