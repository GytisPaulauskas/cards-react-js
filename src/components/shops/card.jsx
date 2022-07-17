import React from 'react'
import { Typography, Card, Box, CardContent } from '@mui/material'
import Image from './image'
import { styled } from "@mui/material/styles";

const CardContentNoPadding = styled(CardContent)(`
  padding: 0;
  &:last-child {
    padding-bottom: 0;
  }
`);

const ShopsCard = ({ title, img }) => {
    return (
        <Card >
            <Box sx={{
                position: 'relative',
                width: '100%',
                pt: '100%'
            }}>
                <Image src={img} sx={{ position: 'absolute', top: 0, left: 0 }} />
            </Box>
            <CardContentNoPadding sx={{

                m: {
                    xs: 1,
                    sm: 1,
                }
            }}>

                <Typography variant="h6"
                    sx={{
                        fontSize: {
                            xs: "0.8rem",
                            sm: "0.85rem",
                            md: "0.90rem",
                            lg: "1.2rem",
                            xl: "1.25rem"
                        }
                    }}>{title}</Typography>

            </CardContentNoPadding>
        </Card>
    )
}

export default ShopsCard