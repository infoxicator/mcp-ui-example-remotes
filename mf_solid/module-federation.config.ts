import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';


export default createModuleFederationConfig({
  name: 'mf_solid',
  exposes: {
    '.': './src/solidRenderer.tsx',
  },
});
