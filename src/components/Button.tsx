import React from 'react';

export interface ButtonProps extends
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger'
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', ...props }) => {
  const {children, style} = props;

  const _style: React.CSSProperties = style || {};
  var design_tokens = require('../../tokens.json');
//   console.log(design_tokens.light.button.primary.value);
  _style.backgroundColor = design_tokens.light.button.primary.value;
//   _style.backgroundColor = '#194fdb'
  _style.width = '208px';
  _style.color = '#ffffff';
  _style.padding = '12px 24px';
  _style.fontFamily = 'Helvetica';
  _style.fontWeight = '700';
  _style.borderRadius = '3em';
  _style.display = 'inline-block';
  _style.border = 0;
  _style.width = '208px';
  return (
    <button style={_style}>{children}</button>
  )
}
