import type { Meta, StoryObj } from '@storybook/react';
// import { expect, userEvent, within } from '@storybook/test';

import { Toast } from './Toast';

const meta: Meta<typeof Toast> = {
  component: Toast,
  args: {
    duration: 4000,
    position: 'top-right',
    message: 'Hello world!',
  }
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {
    ...meta.args,
    message: 'Default!',
  },
};

export const Success: Story = {
  args: {
    ...meta.args,
    message: 'Success!',
  },
};

export const Error: Story = {
  args: {
    ...meta.args,
    message: 'Error!',
  },
};

export const Loading: Story = {
  args: {
    ...meta.args,
    message: 'Loading...',
  },
};
