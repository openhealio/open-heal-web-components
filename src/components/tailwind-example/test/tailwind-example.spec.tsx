import { newSpecPage } from '@stencil/core/testing';
import { TailwindExample } from '../tailwind-example';

describe('tailwind-example', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TailwindExample],
      html: `<tailwind-example></tailwind-example>`,
    });
    expect(page.root).toEqualHtml(`
      <tailwind-example>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </tailwind-example>
    `);
  });
});
