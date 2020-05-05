
window.onload = function() {
    const government = document.querySelector('.government');
    const entrepreneur = document.querySelector('.entrepreneur');
    const capitalist = document.querySelector('.capitalist');
    const landlord = document.querySelector('.landlord');
    const worker = document.querySelector('.worker');
    const production = new CustomEvent("produce", {
        "bubbles": false,
        "cancelable": true,
        "composed": false,
        "detail": 123
    });
    government.addEventListener('produce', function(evt) {
        const response = document.createElement('span');
        response.classList.add('action');
        response.innerText = '我负责维稳';
        this.appendChild(response);
    });
    capitalist.addEventListener('produce', function(evt) {
        const response = document.createElement('span');
        response.classList.add('action');
        response.innerText = '我负责出钱';
        this.appendChild(response);
    });
    landlord.addEventListener('produce', function(evt) {
        const response = document.createElement('span');
        response.classList.add('action');
        response.innerText = '我负责出地';
        this.appendChild(response);
    });
    worker.addEventListener('produce', function(evt) {
        const response = document.createElement('span');
        response.classList.add('action');
        response.innerText = '我负责出力';
        this.appendChild(response);
    });

    entrepreneur.addEventListener('click', function() {
        government.dispatchEvent(production);
        capitalist.dispatchEvent(production);
        landlord.dispatchEvent(production);
        worker.dispatchEvent(production);
    });
}
