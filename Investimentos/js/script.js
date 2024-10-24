const API_TOKEN = 'eeRPDEqoW6cmNC1GiC93zU';

function atualizarSaldo() {
    const saldoConta = document.getElementById('saldo-conta');
    saldoConta.innerText = "R$ 1000,00"; // Exemplo de saldo
}

// Usando a BrAPI
async function obterCotacaoBolsa() {
    const cotacaoBolsa = document.getElementById('cotacao-bolsa');
    
    try {
        // Inclui o token na URL como parâmetro de consulta
        const response = await fetch(`https://brapi.dev/api/quote/IBOV?token=${API_TOKEN}`, {
            method: 'GET'
        });
        
        if (!response.ok) {
            throw new Error('Erro ao obter dados da API');
        }

        const data = await response.json();
        
        // Acessa o primeiro item dentro da chave results
        if (data && data.results && data.results.length > 0) {
            const acao = data.results[0]; // A primeira ação dentro da chave results
            cotacaoBolsa.innerText = `R$ ${acao.regularMarketPrice.toFixed(2)}`; // Exibe o preço atual da ação
        } else {
            cotacaoBolsa.innerText = 'Ação não encontrada.';
        }
    } catch (error) {
        console.error('Erro:', error);
        cotacaoBolsa.innerText = 'Erro ao carregar cotação';
    }
}

function calcularDespesas() {
    const salario = parseFloat(document.getElementById('salario').value);
    const despesa = parseFloat(document.getElementById('despesa').value);
    
    if (isNaN(salario) || isNaN(despesa)) {
        alert('Por favor, insira valores válidos.');
        return;
    }

    const totalGastar = despesa;
    const totalInvestir = salario - totalGastar; // O que sobrar é para investir
    const totalPagar = totalGastar * 0.1; // 10% das despesas

    // Atualiza os resultados
    document.getElementById('investir').innerText = totalInvestir.toFixed(2);
    document.getElementById('gastar').innerText = totalGastar.toFixed(2);
    document.getElementById('pagar').innerText = totalPagar.toFixed(2);
}

function init() {
    atualizarSaldo();
    obterCotacaoBolsa();
    
    // Adiciona evento de clique ao botão calcular
    const botaoCalcular = document.getElementById('calcular');
    botaoCalcular.addEventListener('click', calcularDespesas);
}

window.onload = init;

const lciValue = document.getElementById('lci').value;
const selicValue = document.getElementById('selic').value;
const bolsaValue = document.getElementById('bolsa').value;

console.log('LCI:', lciValue);
console.log('Selic:', selicValue);
console.log('Bolsa:', bolsaValue);
