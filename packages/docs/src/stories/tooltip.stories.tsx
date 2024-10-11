import type { StoryObj, Meta } from '@storybook/react'
import { Tooltip, TooltipProps } from '@learn-design-system/react'

export default {
  title: 'Details/Tooltip',
  component: Tooltip,
  args: {
    children: (
      <button
        style={{
          all: 'unset',

          margin: '50px auto',
          cursor: 'pointer',

          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',

          backgroundColor: '#ef4444',
          padding: '16px 26px',
          borderRadius: '6px',

          color: '#FFFFFF',
          fontFamily: 'Roboto, sans-serif',
        }}
      >
        21
      </button>
    ),
    content: '21 de Outubro - Disponível',
  },
  argTypes: {
    children: {
      control: 'inline-check',
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
