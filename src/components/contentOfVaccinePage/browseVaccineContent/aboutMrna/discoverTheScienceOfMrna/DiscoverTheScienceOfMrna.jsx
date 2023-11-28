import { Box, Button, Typography } from '@mui/material'

import discoverTheScienceOfMrnaPicture from '../../../../../pictures/discoverTheScienceOfMrnaPicture.jfif'

import { fontStyleOpenSans } from '../../../../../context/variables'

const DiscoverTheScienceOfMrna = () => {
  return (
    <Box
      sx={{
        mt: { md: '0px', sm: '80px', xs: '40px' },
        width: '100%',
        height: { md: '324px', sm: '600px' },
        display: 'flex',
        flexDirection: { md: 'row', xs: 'column' },
        borderRadius: '8px',
        transition: '0.3s ease-out',
        color: '#376586',
        ':hover': {
          boxShadow: ' 0px 0px 30px black',
          img: {
            transform: 'scale(1.1)',
          },
        },
      }}>
      <Box
        sx={{
          width: { md: '1150px', xs: '100%' },
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '2rem',
          padding: '1.5rem',
        }}>
        <Box sx={{ width: { md: '540px', xs: '100%' } }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: '600', ...fontStyleOpenSans }}>
            Transforming medicine with mRNA
          </Typography>
          <Typography variant="body1" sx={{ ...fontStyleOpenSans }}>
            At Moderna, we believe the future of medicine is mRNA, the language
            of life inside every cell in our bodies. With our technology, we are
            researching and developing investigational mRNA vaccines and
            therapeutic approaches for infectious diseases, cancers, rare
            diseases, cardiovascular diseases, and autoimmune diseases. Learn
            more about the science of mRNA and how Moderna is developing
            investigational mRNA medicines.
          </Typography>
        </Box>
        <Button
          sx={{
            border: ' 2px solid #376586',
            borderRadius: '8px',
            color: '#376586',
            padding: { sm: '0.75rem 2rem', xs: '0.5rem 1rem' },
            textTransform: 'uppercase',
            fontSize: { sm: '14px', xs: '9px' },
            fontWeight: '700',

            ':hover': {
              background: '#376586',
              color: '#fff',
            },
            ...fontStyleOpenSans,
          }}>
          dicover the science of mrna {'>'}
        </Button>
      </Box>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          overflow: 'hidden',
          borderRadius: '8px',
        }}>
        <img
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            transition: '0.3s ease-out',
            borderRadius: '8px',
          }}
          src={discoverTheScienceOfMrnaPicture}
          alt="discoverTheScienceOfMrnaPicture"
        />
      </Box>
    </Box>
  )
}

export default DiscoverTheScienceOfMrna