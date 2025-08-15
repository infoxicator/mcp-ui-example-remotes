import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
  name: 'mf_svelte',
  exposes: {
    '.': './src/svelteMounter.ts',
  },
});

