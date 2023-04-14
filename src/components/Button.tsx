import React from 'react'

export interface ButtonProps extends
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger'
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', ...props }) => {
  const {children, style} = props;

  const _style: React.CSSProperties = style || {};

  switch(variant) {
    case 'primary':
      _style.backgroundColor = "#194fdb";
      _style.color = '#fff';
      break;
    case 'secondary':
      _style.backgroundColor = "#F8CB2E";
      _style.color = '#000';
      break;
    case 'danger':
      _style.backgroundColor = "#B22727";
      _style.color = '#fff';
      break;
  }

  _style.padding = '12px 24px';
  _style.fontFamily = 'Helvetica';
  _style.fontWeight = 700;
  _style.borderRadius = '3em';
  _style.display = 'inline-block';
  _style.border = 0;

  return (
    <button style={_style} {...props}>{children}</button>
  )
}