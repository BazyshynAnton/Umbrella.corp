import { Box, Typography } from '@mui/material'
import DateBlock from './contentOfMeetUmbrella/DateBlock'
import ReusableButtonWithAnimation from '../reusableButtonWithAnimation/ReusableButtonWithAnimation'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined'

import { useButtonContext } from '../../../context/ButtonContext'

const OurMission = () => {
  const {
    handleMouseEnterFour,
    handleMouseLeaveFour,
    animationForUnderLineFour,
  } = useButtonContext()

  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
      <Box
        onMouseEnter={handleMouseEnterFour}
        onMouseLeave={handleMouseLeaveFour}
        sx={{
          width: '600px',
          display: 'flex',
          flexDirection: 'column',
          gap: '2.5rem',
          cursor: 'pointer',
          p: '15px',
        }}
      >
        <Box sx={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <DateBlock integer={43} text={'Years of progress'} />
          <DateBlock integer={48} text={'Products in pipeline'} />
          <DateBlock integer={35} text={'Ongoing clinical trials'} />
        </Box>
        <Box>
          <Typography
            sx={{ fontWeight: '700', fontSize: '1.6rem', color: '#053f68' }}
          >
            Meet Umbrella
          </Typography>
          <Typography sx={{ fontSize: '18px', color: '#053f68' }}>
            Umbrella’s goal is to deliver on the promise of mRNA science to
            create a new generation of transformative medicines for patients.
          </Typography>
          <Box
            onMouseEnter={handleMouseEnterFour}
            onMouseLeave={handleMouseLeaveFour}
            sx={{ width: '177.14px', mt: '10px' }}
          >
            <ReusableButtonWithAnimation
              animation={animationForUnderLineFour}
              buttonText={'See our mission'}
              icon={<ArrowCircleRightOutlinedIcon sx={{ color: '#d1343e' }} />}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default OurMission