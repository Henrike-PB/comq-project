const notification = () => {
    alert('welcome to comq!')
}

function zoomOut(element){
    const zoom = document.getElementById('zoom-out')

    zoom.style.height = '100vh'
    zoom.style.position = 'fixed'
    zoom.style.width = '100%'
    if (zoom && zoom.id == 'jovens'){
        zoom.innerHTML = "<img src='' alt='pegou'>"
    }
}