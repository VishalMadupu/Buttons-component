// home.js
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

          <Button
            key={index}
            variant={button.color}
            
            >
            {button.name}
           
          </Button>
        ))}
        <Button variant="light">Light</Button>
        <Button variant="white">White</Button>
        <Button variant="link">Link</Button>
      </div>

      <h4 className="header-title">Rounded Buttons</h4>
      <div className="button-list">
        {buttonVariants.map((button, index) => (
          <Button key={index} variant={button.color} rounded>
            {button.name}
          </Button>
        ))}
        <Button variant="light" rounded>Light</Button>
        <Button variant="white" rounded>White</Button>
      </div>

      <h4 className="header-title">Outline Buttons</h4>
      <div className="button-list">
        {buttonVariants.map((button, index) => (
          <Button key={index} variant={button.color} outline>
            {button.name}
          </Button>
        ))}
        <Button variant="light" outline>Light</Button>
        <Button variant="white" outline>White</Button>
      </div>



      <Button variant={'btn primary'} default>demo</Button>
      <br />


      <Button variant={'btn danger'} rounded>demo</Button>

      <Button variant={'btn danger'} className='btn demo rounded-pill wave-effect waves-light '   >demo</Button>
    </div>
  );
};

export default Home;
