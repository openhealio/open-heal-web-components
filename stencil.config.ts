import { Config } from '@stencil/core';
import tailwind, { tailwindHMR } from 'stencil-tailwind-plugin';
import { sass } from '@stencil/sass';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'open-heal-web-components',
  plugins: [
    tailwind(),
    tailwindHMR(),
    sass({
      injectGlobalPaths: ['src/globals/variables.scss', 'src/globals/mixins.scss'],
    }),
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    reactOutputTarget({
      componentCorePackage: 'open-heal-web-components',
      proxiesFile: '../../generated/open-heal-web-components-react/src/components.ts',
    }),
  ],
};
