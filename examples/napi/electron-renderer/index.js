const { ipcRenderer } = require('electron')

const { callLongThreadsafeFunction } = require('../index')

callLongThreadsafeFunction(() => {})

ipcRenderer.on('ping', () => ipcRenderer.send('pong'))
