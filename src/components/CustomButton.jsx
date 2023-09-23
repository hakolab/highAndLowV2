import styled from '@mui/system/styled'
import Button from '@mui/material/Button'

const CustomButton = styled(Button)({
  color: 'black',
  backgroundColor: 'silver',
  ':hover': {
    backgroundColor: 'gray'
  }
})

export default CustomButton
