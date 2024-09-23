// Button.js

import React from 'react';


const Button = ({ onClick, children, variant = 'default', rounded = false, outline = false, ...props }) => {
  const classNames = [
    'btn',
    variant,
    rounded ? 'rounded-pill' : '',
    outline ? 'outline' : '',
  ].join(' ');

  const handleOnclick = () => {
    console.log("buttob clicked")
  };

  return (
    <button className={classNames} onClick={onClick || handleOnclick} {...props}>
      {children}
    </button>
  );
};

export default Button;
