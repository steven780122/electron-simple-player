const {ipcRenderer} = require('electron')
const {$} = require('./helper')

$('add-music-btn').addEventListener('click', ()=>{
    ipcRenderer.send('add-music-window')
})

// document.getElementById('add-music-btn').addEventListener('click', ()=>{
//     ipcRenderer.send('add-music-window')
// })