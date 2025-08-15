import './App.css';
import { useEffect, useRef, useState } from 'react';
import { createInstance, loadRemote } from '@module-federation/enhanced/runtime';

let mfInstance: ReturnType<typeof createInstance> | null = null;

const getMFInstance = () => {
  if (!mfInstance) {
    mfInstance = createInstance({
      name: 'mf_react_host',
      remotes: []
    });
  }
  return mfInstance;
};

const registerRemote = (name: string, entry: string) => {
  const mf = getMFInstance();
  mf.registerRemotes([{ name, alias: name, entry }]);
};

import { init } from '@module-federation/enhanced/runtime';

init({
  name: 'mf_react_host',
  remotes: [
    {
      name: "mfe1",
      entry: "http://localhost:4201/remoteEntry.js",
    }
  ],
});



const App = () => {

  const remoteName = 'mfe1/Component';
  const remoteEntry = 'http://localhost:4201/remoteEntry.js';

  const ref = useRef(null);

  useEffect(() => {
    // if (remoteName && remoteEntry) {
    //   registerRemote(remoteName, remoteEntry);
    // }
    loadRemote(remoteName).then((remote) => {
      console.log('remote', remote);
      // @ts-ignore
      remote.default(ref.current);
    });
  }, []);

  return (
    <div className="content">
      <div ref={ref} />
    </div>
  );
};

export default App;
