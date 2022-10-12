import React from 'react'
import {Box} from '@mui/material'
import {useTheme} from '@mui/material/styles'
import {css} from '@emotion/react'

function Demo() {
  const theme = useTheme()
  return (
    <Box css={css`
      color: ${theme.palette.primary.main};
    `}>
      Hello
    </Box>
  )
}

export default Demo