const notification = () => {
    alert('welcome to comq!')
}

function exit(){
    window.location.reload();
}

function zoomOne() {
    const element = document.querySelector('#qrjovens');
    const empreendimentos = document.querySelector('.empreendimentos');
    const empreendedoras = document.querySelector('.empreendedoras');

    element.style.display = 'flex';
    empreendimentos.style.display = 'none';
    empreendedoras.style.display = 'none';

}

function zoomTwo(){
    const element = document.querySelector('#qrempreendimentos');
    const jovens = document.querySelector('.jovens');
    const empreendedoras = document.querySelector('.empreendedoras');

    element.style.display = 'flex'
    jovens.style.display = 'none'
    empreendedoras.style.display = 'none'
}

function zoomThree(){
    const elemento = document.querySelector('#qrempreendedoras');
    const empreendimentos = document.querySelector('.empreendimentos');
    const jovens = document.querySelector('.jovens');

    elemento.style.display = 'flex';
    jovens.style.display = 'none';
    empreendimentos.style.display = 'none';
}