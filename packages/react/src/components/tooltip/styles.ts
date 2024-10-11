import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipContent = styled(Tooltip.Content, {
  borderRadius: '$sm',
  padding: '$3 $4',
  backgroundColor: '$gray900',

  fontFamily: '$secondary',
  fontSize: '$sm',
  fontWeight: '$medium',
  color: '$gray100',
  lineHeight: '$short',

  userSelect: 'none',

  svg: {
    fill: '$gray900',
  },
})
