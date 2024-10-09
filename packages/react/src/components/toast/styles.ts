import * as Toast from '@radix-ui/react-toast'

import { styled } from '../../styles'

export const ToastContainer = styled(Toast.Root, {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',

  width: '22.5rem',
  boxSizing: 'border-box',
  padding: '$3 $5',

  backgroundColor: '$gray800',
  borderRadius: '$sm',
  border: '1px solid $gray600',

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$gray100',
  },
})

export const ToastTitle = styled(Toast.Title, {
  display: 'flex',
  justifyContent: 'space-between',

  color: '$white',
  fontWeight: '$bold',
  fontSize: '$xl',
  lineHeight: '$base',
  fontFamily: '$default',
})

export const ToastDescription = styled(Toast.Description, {
  color: '$gray200',
  fontFamily: '$default',
  fontSize: '$sm',
})

export const ToastClose = styled(Toast.Close, {
  backgroundColor: 'transparent',
  lineHeight: 0,

  color: '$gray200',

  cursor: 'pointer',
  svg: {
    width: '$4',
    height: '$4',
  },
  '&:focus': {
    boxShadow: '0 0 0 2px $colors$gray100',
  },
  '&:hover': {
    color: '$gray100',
  },
})
