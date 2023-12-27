import { Box, Typography } from '../ui/MUI/mui'
import { fontStyleOpenSans } from '../ui/font/openSans'
import { LazyLoadImage } from '../ui/reactImports/reactImports'

import YellowButton from '../Button/YellowButton'

const ContentForSmallScreens = ({
  picture1,
  picture2,
  buttonText,
  headerText,
  text,
}) => {
  return (
    <Box
      sx={{
        mt: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '450px',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          border: '1px solid #376586',
          background: '#fff',
          width: { md: '600px', sm: '500px', xs: '300px' },
          height: { sm: '400px', xs: '550px' },
          padding: '2pc',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '1rem',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '2rem',
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { md: '3rem', sm: '2.5rem', xs: '1.5rem' },
              fontWeight: '600',
              color: '#376586',
              ...fontStyleOpenSans,
            }}
          >
            {headerText}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: '400',
              color: '#376586',
              ...fontStyleOpenSans,
            }}
          >
            {text}
          </Typography>
        </Box>
        <YellowButton>{buttonText}</YellowButton>
        <Box
          sx={{
            position: 'absolute',
            top: { md: '-50px', sm: '-60px', xs: '-40px' },
            left: { md: '-100px', sm: '-50px', xs: '-10px' },
            width: { md: '150px', sm: '120px', xs: '100px' },
            height: { md: '150px', sm: '120px', xs: '100px' },
          }}
        >
          <LazyLoadImage
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            src={picture1}
            alt="animated-books-icon"
          />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            bottom: { md: '-50px', sm: '-20px', xs: '-20px' },
            right: { md: '-50px', sm: '-40px', xs: '-10px' },
            width: { md: '150px', sm: '120px', xs: '100px' },
            height: { md: '150px', sm: '120px', xs: '100px' },
          }}
        >
          <LazyLoadImage
            style={{ objectFit: 'contain', width: '100%', height: '100%' }}
            src={picture2}
            alt="animated-flask-icon"
          />
        </Box>
      </Box>
    </Box>
  )
}

export default ContentForSmallScreens