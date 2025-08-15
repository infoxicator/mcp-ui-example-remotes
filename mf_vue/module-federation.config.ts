import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
  name: 'mf_vue',
  exposes: {
    '.': './src/vueMounter.tsx',
  },
  shared: {
    vue: { singleton: true },
  },
});
