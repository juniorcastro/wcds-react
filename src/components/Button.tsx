import React from 'react';
import './button.css';

export interface ButtonProps extends
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger'
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', ...props }) => {
  const {children, style} = props;

  const _style: React.CSSProperties = style || {};
  var design_tokens = require('../../design_tokens/tokens.json');
  _style.backgroundColor = design_tokens.core.blue[500].value;
  return (
    <button className={'primary-button'}>{children}</button>
  )
}