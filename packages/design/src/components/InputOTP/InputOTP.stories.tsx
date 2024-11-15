import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { InputOTP, InputOTPProps } from './InputOTP';

const meta: Meta<typeof InputOTP> = {
  component: InputOTP,
  title: 'Input OTP',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof InputOTP>;

export const Default: Story = {
  render: (args: InputOTPProps) => <InputOTP {...args} />,
};
Default.args = { disabled: false, maxLength: 6 };
