import { newSpecPage } from '@stencil/core/testing';
import { LinkButton } from '../link-button';

describe('link-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LinkButton],
      html: `<link-button></link-button>`,
    });
    expect(page.root).toEqualHtml(`
      <link-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </link-button>
    `);
  });
});
