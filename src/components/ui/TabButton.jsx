import React from 'react';
import Button from './Button';

const TabButton = ({ isActive, children, ...props }) => (
  <Button
    variant={isActive ? 'primary' : 'secondary'}
    {...props}
  >
    {children}
  </Button>
);

export default TabButton;