// Button.js

import React from 'react';

const Button = ({ onClick, children, variant = 'default', rounded = false, outline = false, size = '', ...props }) => {
  const classNames = [
    'btn',
    variant,
    rounded ? 'rounded-pill' : '',
    outline ? 'outline' : '',
    size ? `btn-${size}` : '',
  ].join(' ');

  const handleOnclick = () => {
    console.log("button clicked");
  };

  return (
    <button className={classNames} onClick={onClick || handleOnclick} {...props}>
      {children}
    </button>
  );
};

export default Button;
