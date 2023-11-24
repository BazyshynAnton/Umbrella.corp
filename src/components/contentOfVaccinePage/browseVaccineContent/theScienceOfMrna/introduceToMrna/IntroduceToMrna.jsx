import { Box, Typography } from '@mui/material'

import demoImgOne from '../../../../../pictures/demoImgOne.jfif'
import demoImgTwo from '../../../../../pictures/demoImgTwo.jfif'

const fontStyle = { fontFamily: "'Open Sans', sans-serif" }

const IntroduceToMrna = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: { md: 'row', xs: 'column' } }}>
      <Typography variant="body1" sx={{ width: '100%', ...fontStyle }}>
        At Umbrella, we are delivering on the promise of mRNA science to create
        a new generation of transformative medicines for patients.
      </Typography>
      <Box sx={{ width: '100%', height: '350px', position: 'relative' }}>
        <Box
          sx={{
            width: { lg: '350px', md: '280px', sm: '250px', xs: '200px' },
            height: { lg: '450px', md: '400px', sm: '350px', xs: '300px' },
            position: 'absolute',
            top: { lg: '-180px', md: '-220px', sm: '20px', xs: '20px' },
            right: '0',
          }}>
          <img
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
              borderRadius: '20px',
            }}
            src={demoImgOne}
            alt="demo-img1"
          />
        </Box>
        <Box
          sx={{
            width: { lg: '200px', md: '160px', sm: '160px', xs: '120px' },
            height: { lg: '250px', md: '200px', sm: '190px', xs: '150px' },
            position: 'absolute',
            bottom: { lg: '90px', md: '180px', sm: '0px', xs: '40px' },
            right: { lg: '250px', md: '200px', sm: '150px', xs: '120px' },
          }}>
          <img
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
              borderRadius: '20px',
            }}
            src={demoImgTwo}
            alt="demo-img2"
          />
        </Box>
      </Box>
    </Box>
  )
}

export default IntroduceToMrna
