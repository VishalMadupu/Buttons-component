
import React from 'react';
import Button from '../app/components/mybutton/page';
import '../storybook/button.stories.scss';

export default {
  title: 'Components/Button',
  component: Button,
};

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

export const DefaultButtons = () => (
  <div>
    <h4 className="header-title">Default Buttons</h4>
    <div className="button-list">
      {buttonVariants.map((button, index) => (
        <Button key={index} variant={button.color}  size="lg">
          {button.name}
        </Button>
      ))}
      <Button variant="light">Light</Button>
      <Button variant="white">White</Button>
      <Button variant="link">Link</Button>
    </div>
  </div>
);

export const RoundedButtons = () => (
  <div>
    <h4 className="header-title">Rounded Buttons</h4>
    <div className="button-list">
      {buttonVariants.map((button, index) => (
        <Button key={index} variant={button.color} rounded  size="md">
          {button.name}
        </Button>
      ))}
      <Button variant="light" rounded>Light</Button>
      <Button variant="white" rounded>White</Button>
    </div>
  </div>
);

export const OutlineButtons = () => (
  <div>
    <h4 className="header-title">Outline Buttons</h4>
    <div className="button-list">
      {buttonVariants.map((button, index) => (
        <Button key={index} variant={button.color} outline  size="sm">
          {button.name}
        </Button>
      ))}
      <Button variant="light" outline>Light</Button>
      <Button variant="white" outline>White</Button>
    </div>
  </div>
);

export const DemoButtons = () => (
  <div>
    <Button variant={'btn primary'} rounded size="lg">demo</Button>

    <Button variant={'btn danger'} rounded size="md"> demo</Button>
    <Button variant={'btn danger'}  size="sm" rounded>demo</Button> {/** className='btn demo rounded-pill wave-effect waves-light' */}
  </div>
);
