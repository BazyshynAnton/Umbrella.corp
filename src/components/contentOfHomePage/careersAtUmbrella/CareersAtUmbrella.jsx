import { useMediaQuery } from '../shared/ui/MUI/mui'

import ContentForBigScreens from '../shared/Blocks/ContentForBigScreens'
import ContentForSmallScreens from '../shared/Blocks/ContentForSmallScreens'

import redBook from '../../../assets/pictures/redBook.webp'
import books from '../../../assets/pictures/books.webp'
import flask from '../../../assets/pictures/flask.webp'

const text =
  'Our mission is clear: translating science into survival to improve the health of people worldwide. We are always on the lookout for dedicated and curious new talents supporting our team of visionaries, entrepreneurs, scientists, engineers and business professionals. Join us and be part of our unique pioneering spirit.'
const buttonText = 'Careers Portal'
const headerText = 'Careers at Umbrella'

const leftStyles = { left: { xl: '-150px', lg: '0px' } }

const CareersAtUmbrella = () => {
  const isSmallScreen = useMediaQuery('(min-width: 1200px)')

  return (
    <>
      {isSmallScreen ? (
        <ContentForBigScreens
          picture={redBook}
          headerText={headerText}
          text={text}
          buttonText={buttonText}
          leftStyles={leftStyles}
        />
      ) : (
        <ContentForSmallScreens
          picture1={books}
          picture2={flask}
          text={text}
          buttonText={buttonText}
          headerText={headerText}
        />
      )}
    </>
  )
}

export default CareersAtUmbrella
