import PropTypes from 'prop-types'
import { Box, Grid } from '@mui/material'
import Card from './Card'

export default function CardBox({
  firstCardSuit,
  firstCardRank,
  secondCardSuit,
  secondCardRank
}) {
  return (
    <Box id="card-box">
      <Grid
        container
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item>
          <Card suit={firstCardSuit} rank={firstCardRank} />
        </Grid>
        <Grid item>
          <Card suit={secondCardSuit} rank={secondCardRank} />
        </Grid>
      </Grid>
    </Box>
  )
}

CardBox.propTypes = {
  firstCardSuit: PropTypes.string.isRequired,
  firstCardRank: PropTypes.string.isRequired,
  secondCardSuit: PropTypes.string.isRequired,
  secondCardRank: PropTypes.string.isRequired
}
