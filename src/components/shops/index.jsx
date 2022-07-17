import React from 'react'
import { Grid } from '@mui/material'
import ShopsCard from './card';


const ShopsLayout = () => {
    const [shops, setShops] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:8001/shops')
            .then(res => res.json())
            .then(fetchedShops => setShops(fetchedShops))
    }, []);

    return (
        <Grid container spacing={2} sx={{ py: 3, px: 2 }}>
            {shops.map(shop => (
                <Grid key={shops.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <ShopsCard {...shop} />
                </Grid>
            ))}
        </Grid>
    );
}

export default ShopsLayout;