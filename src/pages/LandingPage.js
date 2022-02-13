import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import charles from '../../src/images/charles.svg';
import { Typography } from '@mui/material';


export default function LandingPage() {
  return (

    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="false" disableGutters="false" >
      <Box sx={{ 
        height: '100vh', 
        display: 'grid',
        gridTemplateColumns: '(6, 1fr)',
        gridTemplateAreas: `". header . . . . "
        ". main . sidebar . . "
        ". . . . . . "
        ". . . . . ."
        `,}} >
        <Box sx={{ gridArea: 'header', margin: '10%' }}>Overflow</Box>
        <Box sx={{ gridArea: 'main', margin: '10%'}}> <img src={charles} width="750" height="750" /></Box>
        <Box sx={{ gridArea: 'sidebar', display:'flex', alignItems: 'top', margin:'30%'}}>
            <Stack spacing={4} direction="column" alignItems="top" textAlign="justify">
            <Typography>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Typography>
          <Stack spacing={2} direction="row" alignItems="center">
          <Button variant="contained" size="large">Sign In</Button>
          <Button variant="contained" size="large">Register</Button>
          </Stack>
        </Stack>
      </Box>  

    </Box>
    </Container>
  </React.Fragment>
  );
}

