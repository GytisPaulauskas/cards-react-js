import * as React from 'react';
import Grid from '@mui/system/Unstable_Grid';
import OneCard from './card';



export default function FullWidthGrid() {
    return (
        <Grid container>
            <Grid item xs={12} md={4} lg={4} xl={3}>
                <OneCard />
            </Grid>
            <Grid item xs={12} md={4} lg={4} xl={3}>
                <OneCard />
            </Grid>
            <Grid item xs={12} md={4} lg={4} xl={3}>
                <OneCard />
            </Grid>
            <Grid item xs={12} md={4} lg={4} xl={3}>
                <OneCard />
            </Grid>
        </Grid>
    );
}