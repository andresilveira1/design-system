import { Provider, Viewport } from '@radix-ui/react-toast'

import {
  ToastClose,
  ToastContainer,
  ToastDescription,
  ToastTitle,
} from './styles'
import { X } from 'phosphor-react'
import { ComponentProps } from 'react'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  description: string
  duration?: number
}

export function Toast({ title, description, duration, ...props }: ToastProps) {
  return (
    <Provider>
      <ToastContainer defaultOpen duration={duration} {...props}>
        <ToastTitle>
          {title}{' '}
          <ToastClose asChild>
            <X />
          </ToastClose>
        </ToastTitle>

        <ToastDescription>{description}</ToastDescription>
      </ToastContainer>

      <Viewport />
    </Provider>
  )
}
