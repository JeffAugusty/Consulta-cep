const cepInput = document.getElementById('cep');
const btnConsultar = document.getElementById('btnConsultar');
const resultadoDiv = document.getElementById('resultado');
const logradouroSpan = document.getElementById('logradouro');
const bairroSpan = document.getElementById('bairro');
const cidadeSpan = document.getElementById('cidade');
const estadoSpan = document.getElementById('estado');

btnConsultar.addEventListener('click', async () => {
    const cep = cepInput.value.replace(/[^0-9]/g, '');
    if (cep.length !== 8) {
        alert('CEP inválido!');
        return;
    }

    const url = `https://viacep.com.br/ws/${cep}/json/`; // Adicione o CEP aqui!

    const response = await fetch(url);
    const data = await response.json();

    if (!data.hasOwnProperty('logradouro')) {
        alert('CEP não encontrado!');
        return;
    }

    resultadoDiv.style.display = 'block';
    logradouroSpan.textContent = data.logradouro;
    bairroSpan.textContent = data.bairro;
    cidadeSpan.textContent = data.localidade;
    estadoSpan.textContent = data.uf;
});
