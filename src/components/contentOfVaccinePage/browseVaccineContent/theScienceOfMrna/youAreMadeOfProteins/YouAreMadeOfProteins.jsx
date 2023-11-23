import { Box, Typography } from '@mui/material'
import picOfProteins from '../../../../../pictures/picOfProteins.jpg'
import picOfResearch from '../../../../../pictures/picOfResearch.jpg'
import picOfMed from '../../../../../pictures/picOfMed.jpg'
import picOfImportant from '../../../../../pictures/picOfImportant.jpg'

const fontStyle = { fontFamily: "'Open Sans', sans-serif" }
const colorForImportant = { color: '#FF0000' }

const YouAreMadeOfProteins = () => {
  return (
    <>
      <Typography
        variant="h4"
        sx={{ mt: '150px', fontWeight: '600', ...fontStyle }}>
        You are made of proteins
      </Typography>
      <Typography sx={{ ...fontStyle }}>
        Your body contains <b style={colorForImportant}>trillions of cells</b>,
        the basic units of life. And every cell contains proteins.
      </Typography>
      {/*  */}
      <Box
        sx={{
          mt: '40px',
          display: 'flex',
          flexDirection: 'column',
          height: '300px',
        }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
          }}>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '0.5rem',
            }}>
            <Box sx={{ width: '150px', height: '150px' }}>
              <img
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                }}
                src={picOfProteins}
                alt="pic1"
              />
            </Box>
            <Box
              sx={{
                height: '130px',
                display: 'flex',
                flexDirection: 'column',
              }}>
              <Typography variant="h5" sx={{ ...fontStyle }}>
                What proteins do
              </Typography>
              <Typography variant="body1" sx={{ ...fontStyle }}>
                Proteins are the <b style={colorForImportant}>"workhorses"</b>{' '}
                of your cells. <br /> And your body makes
                <br />
                <b style={colorForImportant}>{'>'}100,000</b> different kinds of
                proteins.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '1rem',
            }}>
            <Box sx={{ width: '150px', height: '150px' }}>
              <img
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                }}
                src={picOfResearch}
                alt="pic2"
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}>
              <Typography variant="h5" sx={{ ...fontStyle }}>
                How proteins work
              </Typography>
              <Typography variant="body1" sx={{ ...fontStyle }}>
                For example, insulin is a protein that helps the body
                <br /> control sugar levels in the blood.
                <br /> In people with Type I diabetes, their body doesn't make
                enough <b style={colorForImportant}>insulin</b>.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
          }}>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '0.5rem',
            }}>
            <Box sx={{ width: '150px', height: '150px' }}>
              <img
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                }}
                src={picOfImportant}
                alt="pic3"
              />
            </Box>
            <Box
              sx={{
                height: '130px',
                display: 'flex',
                flexDirection: 'column',
              }}>
              <Typography variant="h5" sx={{ ...fontStyle }}>
                Why proteins are important
              </Typography>
              <Typography variant="body1" sx={{ ...fontStyle }}>
                When the body doesn’t make the right amount
                <br /> or type of protein, it can cause conditions
                <br /> like{' '}
                <b style={colorForImportant}>cancer or metabolic diseases</b>.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '1rem',
            }}>
            <Box sx={{ width: '150px', height: '150px' }}>
              <img
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                }}
                src={picOfMed}
                alt="pic4"
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}>
              <Typography variant="h5" sx={{ ...fontStyle }}>
                Why we focus on proteins
              </Typography>
              <Typography variant="body1" sx={{ ...fontStyle }}>
                Proteins are essential for
                <b style={colorForImportant}>
                  {' '}
                  maintaining health and preventing disease
                </b>
                .
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default YouAreMadeOfProteins
