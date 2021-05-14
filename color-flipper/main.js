function setColor() {
    let color = '#' + parseInt(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
    let colorName = document.querySelector('.color-name');

    colorName.textContent = '(' + color + ')';
    document.getElementsByTagName("body")[0].style.backgroundColor = color;
}

/**
 * about of the logic used to generate the random colors
 * https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript
 *
 */