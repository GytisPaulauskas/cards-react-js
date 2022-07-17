import React from 'react'
import { Grid, Button, Box, Typography } from '@mui/material'
import ShopsCard from './card';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { display } from '@mui/system';


const ShopsLayout = () => {
    const [shops, setShops] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:8001/shops')
            .then(res => res.json())
            .then(fetchedShops => setShops(fetchedShops))
    }, []);

    return (
        <>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                py: 1,
                px: 2
            }}>
                <Typography variant="h6" sx={{ fontSize: 30, }}>Stores</Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <Button variant="contained" sx={{ mr: 2 }} ><ArrowBackIcon /></Button>
                    <Button variant="contained"><ArrowForwardIcon /></Button>
                </Box>
            </Box>
            <Grid container spacing={1}
                sx={{
                    width: '100%',
                    py: 1,
                    px: 1
                }}>
                {shops.map(shop => (
                    <Grid key={shops.id} item xs={4} sm={3} md={2} lg={1.7} xl={1.5}>
                        <ShopsCard {...shop} />
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default ShopsLayout;