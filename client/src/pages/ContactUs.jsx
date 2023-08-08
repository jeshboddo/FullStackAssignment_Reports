// ContactUs.jsx
import React from 'react';
import { AppBar, Container, Toolbar, Typography, Link } from '@mui/material';

function ContactUs() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            My Website
          </Typography>
          <div style={{ marginLeft: 'auto' }}>
            <Link href="#" color="inherit" style={{ margin: '0 10px' }}>
              About
            </Link>
            <Link href="#" color="inherit" style={{ margin: '0 10px' }}>
              Map
            </Link>
            <Link href="#" color="inherit" style={{ margin: '0 10px' }}>
              Booking
            </Link>
            <Link href="#" color="inherit" style={{ margin: '0 10px' }}>
              FAQ
            </Link>
            <Link href="#" color="inherit" style={{ margin: '0 10px' }}>
              Contact Us
            </Link>
          </div>
        </Toolbar>
      </AppBar>

      <Container>
        {/* Your contact us content goes here */}
      </Container>
    </div>
  );
}

export default ContactUs;
