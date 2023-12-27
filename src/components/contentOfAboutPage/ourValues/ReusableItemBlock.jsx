import { Box, Typography, useMediaQuery } from '@mui/material'

import { fontStyleOpenSans } from '../../../context/variables'

const styleForImg = {
  width: '130px',
  height: '130px',
}

const styleForText = {
  fontSize: '1.3rem',
  color: '#053f68',
  ...fontStyleOpenSans,
}

const ReusableItemBlock = ({ imgOne, imgTwo, textOne, textTwo }) => {
  const width = useMediaQuery('(min-width:287px)')

  const styleForBlockWithImgAndText = {
    width: { sm: '260px', xs: '100%' },
    display: 'flex',
    flexDirection: width ? 'row' : 'column',
    alignItems: { sm: 'center', xs: 'flex-start' },
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: { sm: 'row', xs: 'column' } }}>
      <Box sx={styleForBlockWithImgAndText}>
        <img style={styleForImg} src={imgOne} alt={textOne} />
        <Typography sx={styleForText}>{textOne}</Typography>
      </Box>
      <Box sx={styleForBlockWithImgAndText}>
        <img style={styleForImg} src={imgTwo} alt={textTwo} />
        <Typography sx={styleForText}>{textTwo}</Typography>
      </Box>
    </Box>
  )
}

export default ReusableItemBlock