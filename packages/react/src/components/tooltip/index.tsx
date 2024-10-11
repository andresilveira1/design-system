import { Arrow, Portal, Provider, Root, Trigger } from '@radix-ui/react-tooltip'
import { TooltipContent } from './styles'
import { ComponentProps } from 'react'

export interface TooltipProps extends ComponentProps<typeof Root> {
  children: React.ReactNode
  content: string
}

export function Tooltip({ children, content, ...props }: TooltipProps) {
  return (
    <Provider>
      <Root {...props}>
        <Trigger asChild>{children}</Trigger>

        <Portal>
          <TooltipContent>
            {content}
            <Arrow />
          </TooltipContent>
        </Portal>
      </Root>
    </Provider>
  )
}
