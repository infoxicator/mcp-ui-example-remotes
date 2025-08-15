import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';


export default createModuleFederationConfig({
  name: 'mf_solid',
  exposes: {
    '.': './src/solidRenderer.tsx',
  },
  getPublicPath: `function() {return "https://mcp-ui-example-remotes.vercel.app/mf_solid/"}`,
});
