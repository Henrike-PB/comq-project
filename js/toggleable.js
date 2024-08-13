const openContain = (elementId) => {
    const containerToOpen = document.getElementById(elementId)
    containerToOpen.style.display = 'flex'
}

const closeContain = (elementId) => {
    const containerToClose = document.getElementById(elementId)
    containerToClose.style.display = 'none'
}