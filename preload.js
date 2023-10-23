// preload with contextIsolation enabled
const { contextBridge } = require('electron');
const os = require('os');

contextBridge.exposeInMainWorld('myAPI', {
  doAThing: () => {},
  homeDir: () => os.homedir(),
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron
})