import { h } from '@stencil/core';

export default {
  title: 'LandingPage/LinkButton',
  component: 'link-button',
};

const PrimaryTemplate = () => <link-button>Saiba mais</link-button>;
export const Primary = PrimaryTemplate.bind({});

const SecondaryTemplate = () => <link-button color="secondary">Saiba mais</link-button>;
export const Secondary = SecondaryTemplate.bind({});
