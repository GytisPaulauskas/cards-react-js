import React from 'react'
import { Typography, Card, Box, CardContent } from '@mui/material'
import Image from './image'

const ShopsCard = ({ title, img }) => {
    return (
        <Card >
            <Box sx={{ position: 'relative', width: '100%', pt: '95%' }}>
                <Image src={img} sx={{ position: 'absolute', top: 0, left: 0 }} />
            </Box>
            <CardContent sx={{ p: 2, flexGrow: 1 }}>

                <Typography variant="h6">{title}</Typography>

            </CardContent>
        </Card>
    )
}

export default ShopsCard