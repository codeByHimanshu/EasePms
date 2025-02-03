import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const ChannelHome = () => {
    return (
        <Container maxWidth="lg">
            <Box sx={{ 
                padding: 3,
                minHeight: '100vh',
            }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Channel Manager
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    Welcome to the Channel Manager. Here you can manage and monitor your channels.
                </Typography>
             
            </Box>
        </Container>
    );
};

export default ChannelHome;