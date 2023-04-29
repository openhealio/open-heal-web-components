import { newE2EPage } from '@stencil/core/testing';

describe('tailwind-example', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<tailwind-example></tailwind-example>');

    const element = await page.find('tailwind-example');
    expect(element).toHaveClass('hydrated');
  });
});
