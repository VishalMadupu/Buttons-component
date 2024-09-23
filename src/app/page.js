
'use client'

import React from 'react';
import Button from './components/mybutton/page';

const Home = () => {
  const buttonVariants = [
    { name: "Primary", color: "primary" },
    { name: "Success", color: "success" },
    { name: "Info", color: "info" },
    { name: "Warning", color: "warning" },
    { name: "Danger", color: "danger" },
    { name: "Dark", color: "dark" },
    { name: "Blue", color: "blue" },
    { name: "Pink", color: "pink" },
    { name: "Secondary", color: "secondary" },
  ];

  return (
    <div>
      <h4 className="header-title">Default Buttons</h4>
      <div className="button-list">
        {buttonVariants.map((button, index) => (
          <Button key={index} variant={button.color} size="lg">
            {button.name}
          </Button>
        ))}
        <Button variant="light" size="lg">Light</Button>
        <Button variant="white" size="lg">White</Button>
        <Button variant="link" size="lg">Link</Button>
      </div>

      <h4 className="header-title">Rounded Buttons</h4>
      <div className="button-list">
        {buttonVariants.map((button, index) => (
          <Button key={index} variant={button.color} size="md" rounded>
            {button.name}
          </Button>
        ))}
        <Button variant="light" size="md" rounded>Light</Button>
        <Button variant="white" size="md" rounded>White</Button>
      </div>

      <h4 className="header-title">Outline Buttons</h4>
      <div className="button-list">
        {buttonVariants.map((button, index) => (
          <Button key={index} variant={button.color} outline size="sm">
            {button.name}
          </Button>
        ))}
        <Button variant="light" outline size="sm">Light</Button>
        <Button variant="white" outline size="sm">White</Button>
      </div>

      <Button variant="primary" size="lg" rounded>demo</Button>
      <b>large</b>
      <br />
      <Button size="md" variant="danger" rounded>demo</Button>
      <b>mediam</b>
      <br />
      <Button size="sm" variant="danger"  rounded>demo</Button> {/**className='btn demo'**/}
      <b>small</b>
      <br />
      <Button size="xs" variant="danger" rounded>demo</Button>
      <b>extra small</b>
    </div>
  );
};

export default Home;
