import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
  name: 'mf_svelte',
  exposes: {
    '.': './src/svelteMounter.ts',
  },
  getPublicPath: `function() {return "https://mcp-ui-example-remotes.vercel.app/mf_svelte/"}`,
});

