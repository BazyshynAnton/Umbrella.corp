import { Box, Typography } from '../contentOfHomePage/shared/ui/MUI/mui'
import {
  animated,
  useSpring,
} from '../contentOfHomePage/shared/ui/reactSpringImports/reactSpringImports'
import { fontStyleOpenSans } from '../contentOfHomePage/shared/ui/font/openSans'

import umbrellaHeaderLogoSmall from '../../assets/pictures/umbrellaHeaderLogoSmall.webp'

const Spinner = () => {
  const rotation = useSpring({
    loop: { reverse: true },
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' },
    config: { duration: 2000 },
  })

  return (
    <Box
      sx={{
        minWidth: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <animated.img
        style={{ width: '80px', height: '100%', ...rotation }}
        src={umbrellaHeaderLogoSmall}
        alt="spinner"
      />
      <Typography
        sx={{
          fontWeight: '500',
          fontSize: { sm: '1.5rem', xs: '1.3rem' },
          color: '#053f68',
          ...fontStyleOpenSans,
        }}
      >
        Umbrella
      </Typography>
    </Box>
  )
}

export default Spinner