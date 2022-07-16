import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function OneCard() {
    return (
        <Card sx={{ maxWidth: 370, border: 0 }}>
            <CardMedia
                component="img"
                height="370"
                image="https://lh3.googleusercontent.com/j-pw5ejAM2XLqnKALXuaOL-8eHCrLHpugEWgABgf6Q5JSLsssqOmcrEZ9jtylzDwLpQ9J9IDzz543QogYFV859X1IKaK0R4yug6J=rw-e365-w400"
                alt="Pixel 6 Pro"

            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', fontSize: "1.5rem" }}>
                    Pixel 6 Pro
                </Typography>
                <Typography sx={{ fontSize: "1rem" }}>
                    The best of Google, built around you.
                </Typography>
                <Typography sx={{ fontWeight: 'bold', fontSize: "1rem" }}>From $699  </Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" size="small" sx={{ textTransform: 'none', fontWeight: 'bold', p: 1, }}>Buy</Button>
                <Button size="small" sx={{ textTransform: 'none', fontWeight: 'bold' }}>Learn More <ArrowForwardIosIcon sx={{ fontSize: "1rem", }} /></Button>
            </CardActions>
        </Card>
    );
}