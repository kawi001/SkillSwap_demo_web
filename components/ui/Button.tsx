"use client";

import { Button as AntButton, ButtonProps as AntButtonProps } from 'antd';
import React from 'react';

export interface ButtonProps extends AntButtonProps {
  // Add custom props here if needed in the future
}

export const Button: React.FC<ButtonProps> = (props) => {
  return <AntButton {...props} />;
};
