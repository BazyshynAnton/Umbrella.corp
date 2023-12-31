import { Box, Typography } from '../../../shared/ui/MUIglobal/muiGlobal'
import { LazyLoadImage } from '../../../shared/ui/reactImportsGlobal/reactImportsGlobal'
import { useTranslation } from '../../../shared/translations/translationsImports'
import { fontStyleOpenSans } from '../../../shared/ui/fontStyles/openSans'

import ReusableButton from './ReusableButton'

const ReusableSlide = ({ text, img, buttonText, fontSize }) => {
  const { t } = useTranslation()
  return (
    <Box
      sx={{
        margin: '30px 0px 0px 0px',
        display: 'flex',
        flexDirection: { md: 'row', xs: 'column' },
        height: { md: '340px', xs: '600px' },
        p: { md: '0px 50px' },
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: { md: '100%', sm: '200px', xs: '300px' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: { md: 'center' },
          gap: '2rem',
          padding: '0px 10px px 0px',
          mb: { md: '0', xs: '20px' },
        }}
      >
        <Typography
          sx={{
            color: 'rgb(5, 63, 104)',
            fontWeight: '700',
            fontSize: fontSize,
            ...fontStyleOpenSans,
          }}
        >
          {t(`${text}`)}
        </Typography>
        <ReusableButton buttonText={buttonText} />
      </Box>
      <Box
        sx={{
          width: { md: '900px', xs: '100%' },
          height: { md: '340px', sm: '400px', xs: '100%' },
        }}
      >
        <LazyLoadImage
          src={img}
          alt="slide"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '15px',
          }}
        />
      </Box>
    </Box>
  )
}

export default ReusableSlide
