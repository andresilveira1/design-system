import type { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps } from '@learn-design-system/react'

export default {
  title: 'Alert/Toast',
  component: Toast,
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
    duration: 60 * 60 * 24 * 7,
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
