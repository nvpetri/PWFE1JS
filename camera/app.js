'use strict'

const video = document.getElementById("camera")
const captureButton = document.getElementById("capture-button")
const downloadLink = document.getElementById("download-link")


captureButton.addEventListener("click", () => {
    const canvas = document.createElement("canvas")
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
    const ctx = canvas.getContext("2d")
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height)

    const dataURL = canvas.toDataURL("image/png")
    
    downloadLink.href = dataURL
    downloadLink.style.display = "block"
 
    const fileName = "webcam-capture.png"
    downloadLink.setAttribute("download", fileName)
})


navigator.mediaDevices
    .getUserMedia({ video: true })
    .then((stream) => {
        video.srcObject = stream
    })
    .catch((error) => {
        console.error("Erro ao acessar a câmera:", error)
    })