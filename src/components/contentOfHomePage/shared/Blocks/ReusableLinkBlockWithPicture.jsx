import { Box } from '../ui/MUI/mui'
import { fontStyleOpenSans } from '../ui/font/openSans'
import { LazyLoadImage } from '../ui/reactImports/reactImports'

import ReusableButtonWithAnimation from '../Button/ReusableButtonWithAnimation'

import arrowCircleRightOutlinedIcon from '../../../../assets/pictures/app-icons/arrowCircleRightOutlinedIcon.webp'

const ReusableLinkBlockWithPicture = ({
  text,
  headerText,
  handleEnter,
  handleLeave,
  buttonWidth,
  mainPicture,
  animationFor,
  textForButton,
}) => {
  return (
    <Box
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      sx={{
        mt: { md: '0px', xs: '20px' },
        mb: { md: '0px', xs: '20px' },
        width: '600px',
        overflow: 'hidden',
        borderTopRightRadius: '10px',
        borderTopLeftRadius: '10px',
        cursor: 'pointer',
        ':hover': {
          img: {
            transform: 'scale(1.1)',
          },
        },
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: { md: '200px', xs: '300px' },
          overflow: 'hidden',
        }}
      >
        <LazyLoadImage
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            borderTopRightRadius: '10px',
            borderTopLeftRadius: '10px',
            transition: '0.3s ease-out',
          }}
          src={mainPicture}
          alt="join-us"
        />
      </Box>
      <Box sx={{ p: '15px' }}>
        <p style={{ fontWeight: '700', fontSize: '1.6rem', color: '#053f68' }}>
          {headerText}
        </p>
        {text && (
          <p
            style={{
              fontWeight: '500',
              fontSize: '1rem',
              color: '#376586',
              pt: '10px',
              ...fontStyleOpenSans,
            }}
          >
            {text}
          </p>
        )}
        <Box sx={{ width: buttonWidth, mt: '20px' }}>
          <ReusableButtonWithAnimation
            animation={animationFor}
            buttonText={textForButton}
            icon={
              <LazyLoadImage
                style={{
                  width: '18x',
                  height: '18px',
                  padding: '0px 0px 1px 0px',
                }}
                src={arrowCircleRightOutlinedIcon}
                alt="arrow"
              />
            }
          />
        </Box>
      </Box>
    </Box>
  )
}

export default ReusableLinkBlockWithPicture