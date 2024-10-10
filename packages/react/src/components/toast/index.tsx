import { Provider } from '@radix-ui/react-toast'

import {
  ToastClose,
  ToastContainer,
  ToastDescription,
  ToastTitle,
  ToastViewport,
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
      <ToastContainer duration={duration} {...props}>
        <ToastTitle>
          {title}
          <ToastClose asChild>
            <X />
          </ToastClose>
        </ToastTitle>

        <ToastDescription>{description}</ToastDescription>
      </ToastContainer>

      <ToastViewport />
    </Provider>
  )
}
