'use strict'

const camera = document.getElementById('camera')

navigator.mediaDevices.getUserMedia({video : true}).then(stream => {
    camera.srcObject = stream
})