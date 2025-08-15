import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';
import { shareAll } from '../mf.tools';

export default createModuleFederationConfig({
  name: 'mfe1',
 exposes: {
        '.': './src/bootstrap.ts'
      },
    shared: {
        ...shareAll({
          singleton: true,
          strictVersion: true,
        })
      },
  getPublicPath: `function() {return "https://mcp-ui-example-remotes.vercel.app/angular_mfe1/"}`,
});
